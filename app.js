const btn = document.querySelector("button")
const body = document.querySelector("body")




const backgroundChange = () => {
    let bg = Math.round(Math.random()*1000000)
    let dies = '#' + bg 
    console.log(bg,dies)
    body.style.backgroundColor = dies
    alert('renk kodu :' + dies)
}



btn.addEventListener("click", backgroundChange)