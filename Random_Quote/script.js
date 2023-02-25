const textBox =document.querySelector(".textBox")
const author =document.querySelector(".author")
const btn =document.querySelector(".btn")

btn.addEventListener(
    "click",
    function(){
        fetch('http://api.quotable.io/random')
        .then(response => response.json())
        .then((data) => {
            textBox.innerHTML = `"${data.content}"`;
            author.innerHTML = `- ${data.author} -`
        })
    }
)