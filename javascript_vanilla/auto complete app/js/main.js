const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
// search states.json and filter js
const searchStates = async searchText => {
  const res = await fetch('https://gist.githubusercontent.com/bradtraversy/20dee7787486d10db3bd1f55fae5fdf4/raw/2c06c44dcea55ecbb6fbf20edfd240ec6373b688/state_capitals.json');
  const states = await res.json();
  // get match to current text input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.abbr.match(regex);
  });
  if (searchText !== '') {
    outputHTML(matches);
  } else {
    matchList.innerHTML = '';
  }
}
const outputHTML = matches => {
  let html = "";
  matches.forEach(match => {
    html += `<div class="card card-body mb-1">
      <h4 class="text-dark"> ${match.name} - (${match.abbr})
       <span class="text-primary">
        ${match.capital}
         </span>
       </h4>  
       <small>
       Lat : ${match.lat}/ Long: ${match.long}
        </small>
        </div>
      `;

  });
  console.log(html);
  matchList.innerHTML = html;
}
search.addEventListener('input', () => searchStates(search.value));