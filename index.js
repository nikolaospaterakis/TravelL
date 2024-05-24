
const body = document.getElementById("body")
const loader = document.getElementById("loader")
const main = document.getElementById("main")
const width = window.innerWidth;

setTimeout(() => {
    hideLoader()
   showMainContent()
}, 1500)

function hideLoader(){
    loader.style.opacity = "0"
}

window.addEventListener("resize", () => {
    console.log("hey")
    const width = window.innerWidth;
    if(width < 1279) {
        body.style.backgroundImage = "none"
    } else {
            body.style.backgroundImage = `url("/images/bg.png")`
            body.style.backgroundRepeat = "no-repeat"
            body.style.backgroundAttachment = "fixed"
            body.style.backgroundPosition = "right bottom"
            body.style.backgroundSize = "46% 89%"
    }
})

function showMainContent(){
    setTimeout(() => {
        main.style.opacity = "100"
        if(width > 1279) {
            body.style.backgroundImage = `url("/images/bg.png")`
            body.style.backgroundRepeat = "no-repeat"
            body.style.backgroundAttachment = "fixed"
            body.style.backgroundPosition = "right bottom"
            body.style.backgroundSize = "46% 89%"
        }
        
    }, 1000);
}

