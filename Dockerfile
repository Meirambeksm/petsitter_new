# Используем официальный образ node
FROM node:21.1.0-alpine AS build

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы в рабочую директорию
COPY . .

# Строим приложение
RUN npm run build

# Используем Nginx для сервировки статических файлов
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html  

# Копируем конфигурационный файл Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Экспонируем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
