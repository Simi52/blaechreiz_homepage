document.addEventListener("DOMContentLoaded", async function () {
    const albumList = document.getElementById("album-list");
    const gallerySection = document.getElementById("image-gallery");
    const galleryGrid = document.getElementById("gallery-grid");
    const albumTitle = document.getElementById("album-title");

    let albums = [];

    // Load album data from JSON file
    async function loadAlbums() {
        try {
            const response = await fetch("../Data/galery.json");
            albums = await response.json();
            displayAlbums();
        } catch (error) {
            console.error("Error loading albums:", error);
        }
    }

    // Display album buttons dynamically
    function displayAlbums() {
        albums.albums.forEach(album => {
            const albumCard = document.createElement("div");
            albumCard.classList.add("album-card");
            albumCard.innerHTML = `<h2>${album.name}</h2>`;
            albumCard.onclick = () => loadAlbum(album);
            albumList.appendChild(albumCard);
        });
    }

    // Load images dynamically based on count
    function loadAlbum(album) {
        albumList.style.display = "none";
        gallerySection.style.display = "block";
        albumTitle.innerText = album.name;
        galleryGrid.innerHTML = ""; // Clear previous images

        for (let i = 1; i <= album.count; i++) {
            let img = document.createElement("img");
            img.src = `Gallery/${album.name}/Image${i}.png`; // Assuming images are named sequentially
            img.alt = `Image ${i}`;
            galleryGrid.appendChild(img);
        }
    }

    // Back to album list
    window.goBack = function () {
        gallerySection.style.display = "none";
        albumList.style.display = "flex";
    };

    // Load albums on page load
    loadAlbums();
});
