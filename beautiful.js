const memebtn = document.querySelector('.generate-meme .memebtn')
const image = document.querySelector('.generate-meme img')
const Title = document.querySelector('.generate-meme .memetitle')
const Author = document.querySelector('.generate-meme .memeauthor')

const updateDetails = (url,title,author)=>{
    image.setAttribute('src',url)
    Title.innerHTML = title
    Author.innerHTML = author
}

const fun= () => {
    fetch('https://meme-api.com/gimme/BeautifulFemales')
    .then(response =>{
       return response.json()
    })
    .then(data=>{
        updateDetails (data.url,data.title,data.author)
    })
}

memebtn.addEventListener('click',fun)