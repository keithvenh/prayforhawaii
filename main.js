document.addEventListener('DOMContentLoaded', function() {
  
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Select a random object
        const randomIndex = Math.floor(Math.random() * Object.keys(data).length);

        console.log(randomIndex);
        
        const content = data[randomIndex.toLocaleString()];

        console.log(content);

        // Display content on the page
        const displayContainer = document.getElementById('container');
        const contentHTML = `
          <div class='contentContainer pastor'>
            <p class='label'>Pastor</p>
            <p class='content'>${content.pastor}</p>
          </div>
          <div class='contentContainer church'>
            <p class='label'>Church</p>
            <p class='content'>${content.church}</p>
          </div>
          <div class='contentContainer city'>
            <p class='label'>City</p> 
            <p class='content'>${content.city}</p>
          </div>
          <div class='contentContainer island'>
            <p class='label'>Island</p>
            <p class='content'>${content.island}</p>
          </div>
        `;
        displayContainer.innerHTML = contentHTML;
    })
    .catch(error => console.error('Error fetching data:', error));
});

