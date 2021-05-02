
// Flying icons on CTA Section
for (let truck = 1; truck < 14 ; truck++) {
    duration = Math.trunc(Math.random() * 30 + 20);
    distance = Math.trunc(Math.random() * 1400 + 1);
    animation = Math.trunc(Math.random() * 3);
    document.querySelector(`.truck${truck}`).style.setProperty('animation', `bubble-animation${animation} ${duration}s -60s infinite linear`)
    document.querySelector(`.truck${truck}`).style.setProperty('left', `${distance}px`)
}

// Gallery modal
const thumbList = document.querySelectorAll(".thumb");

thumbList.forEach((element, index) => {
    element.addEventListener("click", function(){
        
        // Select photo
        document.querySelector(".image").setAttribute("src", `./images/${index + 1}.jpg`);

        // enable overlay
        document.querySelector(".overlay").style.display = "block";

        // Transition

    })
});

document.querySelector(".exit-button").addEventListener("click", function() {
    document.querySelector(".overlay").style.display = "none";
})

document.querySelector(".overlay-photo").addEventListener("click", function() {
    document.querySelector(".overlay").style.display = "none";
})