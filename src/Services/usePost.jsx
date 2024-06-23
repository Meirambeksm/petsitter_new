export default async function sendData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const result = await response.json();
      console.log("Data sent successfully!", result);
    } else {
      console.log("Error sending data:", response.status);
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
