document.addEventListener('DOMContentLoaded', function() {
    const calendarIframe = document.getElementById('calendar-widget');
    const calendarId = 'aggavni4@gmail.com'; // Replace with your actual Google Calendar ID
    const timeZone = 'Asia/Kolkata'; // Replace with your desired time zone
    const today = new Date().toISOString().split('T')[0];
    const calendarUrl = `https://calendar.google.com/calendar/embed?mode=DAY&src=${calendarId}&ctz=${timeZone}&dates=${today}%2F${today}`;
    calendarIframe.src = calendarUrl;
});


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateBtn').addEventListener('click', generateText);
    console.log("button clicked");
  });
  
  
  async function generateText() {
    console.log("generate text is called ");
    const apiKey = 'AIzaSyCtmZQDO-s2ReE7OikQmchrbH6LeDeUV3o';
    const endpoint = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=' + apiKey;
    const prompt = document.getElementById('prompt').value;
  
    const data = {
        contents: [
            {
                role: "user",
                parts: [{ text: prompt }]
            }
        ]
    };
  
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
  
        const result = await response.json();
        const generatedText = result.candidates[0].content.parts[0].text;
        console.log(result);
        document.getElementById('result').innerText = generatedText;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error generating text';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const youtubePlayer = document.getElementById('youtube-player');
    const videoId = '4y33h81phKU'; // Replace with the actual YouTube video ID
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    youtubePlayer.src = embedUrl;
});