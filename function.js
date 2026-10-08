function revealDesign() {
    document.getElementById("designImage").src = "FINAL_WORK/shootout4.jpg";
    document.getElementById("finishButton").textContent = "Back to Sketch";
    document.getElementById("finishButton").removeEventListener("click", revealDesign);
    document.getElementById("finishButton").addEventListener("click", showSketch);
}

function showSketch() {
    document.getElementById("designImage").src = "SKETCH_DONE/EXPORT_COP.png";
    document.getElementById("finishButton").textContent = "Reveal Finished Piece";
    document.getElementById("finishButton").removeEventListener("click", showSketch);
    document.getElementById("finishButton").addEventListener("click", revealDesign);
}

document.getElementById("finishButton").addEventListener("click", revealDesign);