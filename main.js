// ===== INITIAL LOAD OF DATA WITH ALL FILTER ON PAGE LOAD ===== //
document.addEventListener('DOMContentLoaded', fetchFromData('all'));

// ===== FUNCTION TO FETCH DATA FROM JSON FILE ===== //
function fetchFromData(filter) {
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        // ===== FILTER DATA IF NECESSARY ===== //
        if(filter !== 'all') {
          data = data.filter(d => d['island'].toLowerCase() === filter)
        }

        // ===== SELECT A RANDOM OBJECT FROM DATA ===== //
        const randomIndex = Math.floor(Math.random() * Object.keys(data).length);
        
        const content = data[randomIndex];

        // ===== DISPLAY CONTENT ON THE PAGE ===== //
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
}

function updateFilter(filter) {
  // ===== GET CURRENTLY ACTIVE FILTER ===== //
  const activeFilter = document.getElementsByClassName('activeFilter');

  for(let i = 0; i < activeFilter.length; i++) {
    // ===== REMOVE ACTIVE FILTER CLASS FROM ALL CURRENT FILTERS ===== //
    activeFilter[i].classList.remove('activeFilter');
  }

  // ===== ADD ACTIVE FILTER TO CLICKED FILTER ===== //
  document.getElementById(filter).classList.add('activeFilter');

  // ===== UPDATE DATA FILTER AND GET NEW DATA ===== //
  fetchFromData(filter);
}



// ===== ADD EVENT LISTENERS TO ALL FILTER BUTTONS ===== //
const buttons = document.getElementsByTagName('button');

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', event => {
    // ===== UPDATE THE FILTER ON BUTTON CLICK EVENT ===== //
    updateFilter(event.target.id);
  })
}