
const liker = document.querySelector('.like-glyph')
const picture = document.createElement('img')
const form = document.querySelector('#comment-form')
const header = document.querySelector('h1')
const next = document.getElementById('next-dog')
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// get random dog
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(dog => myDog(dog))

// display dogs that are in the json
fetch('http://localhost:3000/posts')
    .then(re => re.json())
    .then(data => {
        data.forEach(myDog => renderOnedog(myDog))
    })

function myDog(dog) {
    picture.setAttribute('src', `${dog.message}`)
    picture.setAttribute('class', `img-rounded`)
    picture.setAttribute('width', '200')
    picture.setAttribute('height', '200')
    document.querySelector('#my-random-dog').appendChild(picture)
}

// evenlisterner submit form
form.addEventListener('submit', (e) => {
    handlesubmit(e)
})


// Build Dog card with name:
function renderOnedog(myDog) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src="${myDog.imgURL}" width="150" height="150" >
    <div class="content">
        <h4>${myDog.name}</h4>
        <span class="love">${myDog.myLike}</span>
    </div>
    `
    document.querySelector('.dog-list').appendChild(card)
}
function getDog() {
    fetch('http://localhost:3000/posts')
        .then(re => re.json())
        .then(data => {
            renderOnedog(data[data.length - 1])
        })
}

function handlesubmit(e) {
    e.preventDefault()
    let dogname = e.target.querySelector('#comment-input').value
    form.reset()
    let dogObj = {
        name: `${dogname}`,
        imgURL: `${document.querySelector('.img-rounded').src}`,
        myLike: `${liker.innerHTML}`
    }
    fetch('http://localhost:3000/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(dogObj)
    })
        .then(res => res.json())
        .then(dogObj => getDog(dogObj))
    // reset the liker
    liker.innerText = EMPTY_HEART
    liker.className = ''
}

// add eventlistener to H1
header.addEventListener('mouseover', () => header.style.color = 'red')


// addeventlistener to next
next.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dog => myDog(dog))
})

// simple like
function likeCallback(e) {
    const heart = e.target;
    if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART
        heart.className = ''
    }
    else {
        heart.innerText = FULL_HEART
        heart.className = 'activated-heart'
    }
}

liker.addEventListener("click", likeCallback);


