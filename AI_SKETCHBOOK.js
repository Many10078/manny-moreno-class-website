// AI-assisted code
// This array stores the images, titles, and descriptions for each project.

const projects = [
    {
        sketch: "SKETCHES/sketch_1.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_1.jpg",
        title: "Cop Shootout",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_2.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_2.jpg",
        title: "Sunset Drive",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_3.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_3.jpg",
        title: "Mysterious Cave",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_4.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_4.jpg",
        title: "SNAKE!",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_5.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_5.jpg",
        title: "Forbidden Treasure?",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_6.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_6.jpg",
        title: "TRAP!",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_7.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_7.jpg",
        title: "Fallen Battlefield",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_8.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_8.jpg",
        title: "Trooper Close-Up",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_9.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_9.jpg",
        title: "Ready For Duty",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_10.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_10.jpg",
        title: "Mr.Nobody Poster",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_11.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_11.jpg",
        title: "Full Throttle Poster",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_12.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_12.jpg",
        title: "Trooper Poster",
        description: "A look at the process behind this design. (photos may take time to load)"
    },

    {
        sketch: "SKETCHES/sketch_13.png", // CHANGE THIS IF NEEDED
        final: "FINAL_WORK/final_13.jpg",
        title: "Lego City Vice",
        description: "A look at the process behind this design. (photos may take time to load)"
    }
];


let currentProject = 0;


// AI-assisted code
// This function changes the images and information when moving
// between different projects.

function showProject() {

    document.getElementById("sketchImage").src =
        projects[currentProject].sketch;

    document.getElementById("finalImage").src =
        projects[currentProject].final;

    document.getElementById("projectTitle").textContent =
        projects[currentProject].title;

    document.getElementById("projectDescription").textContent =
        projects[currentProject].description;

    document.getElementById("projectNumber").textContent =
        String(currentProject + 1).padStart(2, "0") + " / 13";

    document.getElementById("slider").value = 50;

    document.querySelector(".sketch-container").style.width = "50%";

    document.querySelector(".slider-line").style.left = "50%";
}


// AI-assisted code
// This changes the slider position as the user drags it.

document.getElementById("slider").addEventListener("input", function() {

    const value = this.value;

    document.querySelector(".sketch-container").style.width =
        value + "%";

    document.querySelector(".slider-line").style.left =
        value + "%";
});


// AI-assisted code
// Previous and Next buttons change the current project.

document.getElementById("nextButton").addEventListener("click", function() {

    currentProject++;

    if (currentProject >= projects.length) {
        currentProject = 0;
    }

    showProject();
});


document.getElementById("previousButton").addEventListener("click", function() {

    currentProject--;

    if (currentProject < 0) {
        currentProject = projects.length - 1;
    }

    showProject();
});