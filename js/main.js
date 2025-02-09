document.addEventListener("DOMContentLoaded", function () {
    const portfolioModal = document.getElementById("portfolioModal");

    portfolioModal.addEventListener("show.bs.modal", function (event) {
        let button = event.relatedTarget; // The button that triggered the modal

        // Extract data attributes from the button
        let title = button.getAttribute("data-title");
        let images = button.getAttribute("data-images").split(","); // Convert to array
        let description = button.getAttribute("data-description");
        let features = button.getAttribute("data-features");
        let technology = button.getAttribute("data-tech");
        let techStack = button.getAttribute("data-tech");
        let link = button.getAttribute("data-link");

        // Update modal elements
        document.getElementById("modalLink").setAttribute("href", link);
        document.getElementById("modalTitle").textContent = title;
        // document.getElementById("modalDescription").textContent = description;
        // document.getElementById("modalTechnology").textContent = techStack;
        // document.getElementById("modalFeatures").innerHTML = features.replace(/,/g, "<br>");

        let featureList = features.split(",").map(item => `<li>${item.trim()}</li>`).join(""); 
        document.getElementById("modalFeatures").innerHTML = `<ol>${featureList}</ol>`;

        let technologyList = technology.split(",").map(item => `<li>${item.trim()}</li>`).join(""); 
        document.getElementById("modalTechnology").innerHTML = `<ol>${technologyList}</ol>`;

        // Populate Carousel
        let carouselInner = document.getElementById("carouselImages");
        carouselInner.innerHTML = ""; // Clear previous images

        images.forEach((imgSrc, index) => {
            let activeClass = index === 0 ? "active" : ""; // First image should be active
            carouselInner.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="${imgSrc}" class="d-block w-100" alt="Portfolio Image" style="height: 400px; object-fit: cover;">
                </div>
            `;
        });
    });
});
