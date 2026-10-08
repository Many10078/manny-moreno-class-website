function revealDesign() {
document.getElementById("designImage").src = "FINAL_WORK/final_1.jpg";
document.getElementById("finishButton").textContent = "Back to Sketch";
document.getElementById("finishButton").removeEventListener("click", revealDesign);
document.getElementById("finishButton").addEventListener("click", showSketch);
}

function showSketch() {
document.getElementById("designImage").src = "SKETCHES/sketch_1.png";
document.getElementById("finishButton").textContent = "Reveal Finished Piece";
document.getElementById("finishButton").removeEventListener("click", showSketch);
document.getElementById("finishButton").addEventListener("click", revealDesign);
}

document.getElementById("finishButton").addEventListener("click", revealDesign);