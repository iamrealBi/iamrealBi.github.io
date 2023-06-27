alert("💖🥳 Anh không có cả thế giới. Anh chỉ có anh, dành cho em🎇🧨");
async function displayBirthdayMessage() {
  try {
    const response = await fetch('assets/json/messages.json');
    console.log(response); // log the response object to the console
    const data = await response.json();

    // Get a random message from the array
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomMessage = data[randomIndex].text;

    // Display the message
    alert(randomMessage);
  } catch (error) {
    console.error(error);
  }
}