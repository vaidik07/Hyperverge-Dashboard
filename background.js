chrome.identity.getAuthToken({ interactive: true }, function(token) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
    // Use the token to make API requests
    console.log('Token: ', token);
    fetchSlidesData(token);
  });

  function fetchSlidesData(token) {
    const presentationId = '1g8BMu9yzVXdFR_NvdxR4FgF2HY_00fXp6guyHs587sY';
    const url = `https://slides.googleapis.com/v1/presentations/${presentationId}`;
  
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${token}`
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Slides data: ', data);
    })
    .catch(error => {
      console.error('Error fetching slides data: ', error);
    });
  }