fetch("data.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("jsonOutput").textContent = JSON.stringify(data, null, 4);
    })
    .catch(error => {
        console.error("Error al cargar el JSON:", error);
    });
