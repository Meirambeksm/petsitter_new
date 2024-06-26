export default async function sendData(url, data, setUserid) {
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
      if (result.userid) {
        setUserid(result.userid);
        console.log(result.userid);
      } else {
        console.log("It is working");
      }
    } else {
      console.log("Error sending data:", response.status);
    }
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
