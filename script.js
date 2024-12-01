// This function opens the image modal and displays the clicked image.
function openImage(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
  
    modal.style.display = "flex"; // This makes the modal visible.
    setTimeout(() => {
        modal.style.opacity = 1; // Fade-in effect
    }, 10); // Small delay to ensure the modal is rendered before applying the transition

    modalImage.src = imageSrc;
    modalImage.style.width = "100%"; // You can adjust the width if necessary
}

// Close the modal when clicking outside the image (on the modal background).
function closeImage(event) {
    const modal = document.getElementById("imageModal");
    
    // Check if the click was on the modal background (not on the image).
    if (event.target.id === "imageModal") {
        modal.style.opacity = 0; // Fade-out effect
        setTimeout(() => {
            modal.style.display = "none"; // Hide the modal
        }, 300); // Wait for the transition to complete
    }
}

window.onload = () => {
    document.getElementById("imageModal").style.display = "none"; // Make sure it's hidden initially
};

// Add an event listener to close the modal if clicked outside the image.
document.getElementById("imageModal").addEventListener("click", closeImage);
