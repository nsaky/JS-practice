let img=document.querySelector(".img-container img")
let heart=document.querySelector(".img-container i")


img.addEventListener("dblclick", (dets)=>{
    // console.log(dets)
    heart.style.left=dets.offsetX+"px"
    heart.style.top=dets.offsetY+"px"

    // let rot = 20+Math.floor(Math.random()*51)
    // let sign= Math.floor(Math.random()*2)
    // if (sign===1){
    //     rot*=-1
    // }
    // heart.style.transform=`translate(-50%, -100%) scale(0) rotate(${rot}deg)`

    // heart.style.transition= "transform ease 0.4s"
    heart.style.opacity=1
    heart.style.transform="translate(-50%, -100%) scale(1) rotate(0)"
    // console.log("Liked")

    setTimeout(()=>{
        heart.style.opacity=0;
        heart.style.transform="translate(-50%, -100%) scale(0) rotate(-60deg)"
        // heart.style.transition= "none"
    }, 700)
})



