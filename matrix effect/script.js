const p=document.querySelector("p")
let text=p.innerText

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iterations=0

function randomText(){
    let txt= text.split("").map((char,index)=>{
        if (index<iterations){
            return char
        }
        return chars.split("")[Math.floor(Math.random()*52)]
    }).join("")
    iterations+=0.2
    p.innerText=txt
}

setInterval(randomText, 30)