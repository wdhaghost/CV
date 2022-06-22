let lastActive=0;

document.getElementById("profil").addEventListener("click",function(event){
    document.getElementById("info").classList.toggle("active")
})

document.getElementById("skill-btn").addEventListener("click",function(event){
    document.getElementById("skills").classList.toggle("active")
})
document.getElementById("exp-btn").addEventListener("click",function(event){
    document.getElementById("exp").classList.toggle("active")
})

document.getElementById("degree-btn").addEventListener("click",function(event){
    document.getElementById("degree").classList.toggle("active")
})


const navList=document.querySelectorAll(".nav-list .nav-item")
for (const item of navList ) {
   
    item.addEventListener("click",function(event){
        for (const i of navList) {
            document.getElementById(i.dataset.name).classList.remove("active")
            event.preventDefault()
        }

        document.getElementById(item.dataset.name).classList.add("active")
    
    })
}

window.addEventListener("resize", function(event){
    if(window.innerWidth>=768){
        for (const i of navList) {
            document.getElementById(i.dataset.name).classList.remove("active")
            event.preventDefault()
        }
        
        document.getElementById("exp").classList.add("active")
    }
  })