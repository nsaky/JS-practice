const users = [
  {
    fullName: "Aarav Sharma",
    profession: "Frontend Developer",
    description: "Builds responsive web interfaces using HTML, CSS, JavaScript, and React.",
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    fullName: "Neha Verma",
    profession: "UI/UX Designer",
    description: "Designs clean, user-friendly interfaces with a strong focus on usability.",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    fullName: "Rohit Mehta",
    profession: "Backend Developer",
    description: "Works on APIs, databases, and server-side logic using Node.js and MongoDB.",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    fullName: "Ananya Gupta",
    profession: "Data Analyst",
    description: "Analyzes and visualizes data to extract meaningful insights for decision-making.",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    fullName: "Karan Singh",
    profession: "Mobile App Developer",
    description: "Develops cross-platform mobile apps using Flutter and React Native.",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    fullName: "Pooja Nair",
    profession: "Digital Marketer",
    description: "Specializes in SEO, content strategy, and social media marketing.",
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  }
];

let main= document.querySelector("main")

let code= ""
users.forEach(function(data){
    code+=`<div class="card">
            <img src="${data.profileImage}" alt="">
            <h2>${data.fullName}</h2>
            <h3>${data.profession}</h3>
            <p>${data.description}</p>
        </div>`
})

main.innerHTML=code