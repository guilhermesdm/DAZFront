const baseURL = 'https://api.sampleapis.com/switch/games';

// This functions gets the json from API and return
async function getGameList(){
  const response = await fetch(baseURL)
  const gameList = await response.json()
  return gameList.slice(0, 100)
}

// Creates an HTML card
function cardTemplate(game){
  return `<li class="games-card" onclick="Swal.fire({
    title: 'Details',
    html: 'Developer: ${game.developers} <br> Genres: ${game.genre} <br> Publisher: ${game.publishers} <br> Release date Japan: ${game.releaseDates.Japan} <br> Release date North America: ${game.releaseDates.NorthAmerica} <br> Release date Eruope: ${game.releaseDates.Europe} <br> Release date Australia: ${game.releaseDates.Australia}',
  })">
    <p> ${game.name} </p>
  </li>`
}

// Search game by name
function search(){
  let searchButton = document.getElementById('searchButton')
  searchButton.addEventListener('keyup', searchGame)

  function searchGame(){
    let value = document.getElementById('searchButton').value.toUpperCase();

    let ul = document.getElementById('games')

    let li = ul.querySelectorAll('li.games-card')

    for(let i = 0; i <li.length; i++){
      let p = li[i].getElementsByTagName('p')[0]
    
      if(p.innerHTML.toUpperCase().indexOf(value) > -1){
        li[i].style.display = ''
      } else {
        li[i].style.display = 'none'
      }
    }
  }
}

// Filter the list by genre
async function filterGenre(genre){
  const gameList = await getGameList()
  const filteredGameList = gameList.filter(game => game.genre.includes(genre))
  const $gameList = document.getElementById("games")
  $gameList.innerHTML = ''
  filteredGameList.forEach(game =>{
    $gameList.innerHTML += cardTemplate(game)
  })
}

// Filter the list by developers
async function filterDeveloper(developers){
  const devList = await getGameList()
  const filteredDeveloperList = devList.filter(dev => dev.developers.includes(developers)) 
  const $devList = document.getElementById("games")
  $devList.innerHTML = ''
  filteredDeveloperList.forEach(dev =>{
    $devList.innerHTML += cardTemplate(dev)
  })
}

// Filter the list by publishers
async function filterPublisher(publishers){
  const publishList = await getGameList()
  const filteredPublisherList = publishList.filter(publish => publish.publishers.includes(publishers))
  const $publishList = document.getElementById("games")
  $publishList.innerHTML = ''
  filteredPublisherList.forEach(publish =>{
    $publishList.innerHTML += cardTemplate(publish)
  })
}

// Reset the list
async function cleanFilter(){
  const gameList = await getGameList()
  const $gameList = document.getElementById("games")
  gameList.forEach(games =>{
    $gameList.innerHTML += cardTemplate(games)
  })
}

// Load the functions after the page start
async function onLoad(){
  const $gameList = document.getElementById("games")
  const gameList = await getGameList()
  search()
  gameList.forEach(games => {
    $gameList.innerHTML += cardTemplate(games)
  })
}

onLoad()