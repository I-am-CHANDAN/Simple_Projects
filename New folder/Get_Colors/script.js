// Function
const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;
    document.getElementById("colorcode").innerText = randomCode;

    //Copy the Color Code
    navigator.clipboard.writeText(randomCode);

}

//Event Call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//Initial Call
getColor();