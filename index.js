
const body = document.getElementById("body")
const loader = document.getElementById("loader")
const main = document.getElementById("main")
setTimeout(() => {
    hideLoader()
   showMainContent()
}, 1500)

function hideLoader(){
    loader.style.opacity = "0"
}

function showMainContent(){
    setTimeout(() => {
        main.style.opacity = "100"
    }, 1000);
}