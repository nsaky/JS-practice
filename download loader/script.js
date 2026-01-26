const h2=document.querySelector("h2")
const btn=document.querySelector("button")
const inner=document.querySelector(".inner")


grow=0

btn.addEventListener("click", ()=>{
    btn.style.pointerEvents="none";
    console.log("Download Started")
    btn.innerHTML="Downloading..."

    let num=50+Math.floor(Math.random()*51)
    console.log("Your Downloaded will be completed in", num/10)

    let inc= setInterval(()=>{
        grow++
        h2.innerHTML=grow+"%"
        inner.style.width=grow+"%"
    }, num)

    setTimeout(()=>{
        clearInterval(inc)
        btn.style.opacity=0.5
        btn.innerHTML="Downloaded"
        console.log("Downloaded")
    }, num*100)
})