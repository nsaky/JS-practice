const main= document.querySelector("main")
const btn= document.querySelector("button")

const quotes = [
  "Dream big, start small",
  "Progress over perfection always",
  "Consistency beats raw talent",
  "Stay curious, keep learning",
  "Create more than you consume",
  "Small steps build momentum",
  "Focus fuels real success",
  "Discipline creates true freedom",
  "Trust the process fully",
  "Action cures most fear",
  "Growth lives outside comfort",
  "Make time count daily",
  "Clarity comes through action",
  "Effort compounds over time",
  "Choose courage over comfort",
  "Ideas mean nothing without action",
  "Patience powers long journeys",
  "Learn fast, adapt faster",
  "Momentum loves committed people",
  "Show up every day",
  "Direction matters more than speed",
  "Simplify to amplify results",
  "Resilience beats motivation alone",
  "Build habits, shape future",
  "Start now, refine later"
];

btn.addEventListener("click", ()=>{
    let h1=document.createElement("h1")
    let quote=quotes[Math.floor(Math.random()*quotes.length)]
    h1.innerHTML=quote

    let x= Math.random()*100
    let y= Math.random()*100
    let r=Math.floor(Math.random()*360)
    let s=Math.random()
    let c1=Math.floor(Math.random()*256)
    let c2=Math.floor(Math.random()*256)
    let c3=Math.floor(Math.random()*256)

    h1.style.left=`${x}%`
    h1.style.top=`${y}%`
    h1.style.rotate=`${r}deg`
    h1.style.scale=s
    h1.style.color=`rgb(${c1}, ${c2}, ${c3})`
    

    main.appendChild(h1)


})