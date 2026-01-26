let cursor=document.querySelector("#cursor")
let body= document.querySelector("body")

body.addEventListener("mousemove", function(dets){
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
})

body.addEventListener("click", ()=>{
    console.log("clicked")
})