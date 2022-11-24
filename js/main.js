// Goal: Display data returned from an api
// https://api.thecatapi.com/v1/images/search

document.querySelector('button').addEventListener('click', getCat)

function getCat(){
    fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data[0])
        document.querySelector('img').src = data[0].url
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}