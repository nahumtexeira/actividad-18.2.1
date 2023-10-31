document.addEventListener("DOMContentLoaded", function () {
    const apiBaseUrl = "https://6541004945bedb25bfc30acd.mockapi.io/users";
    const resultList = document.getElementById("results");
    function mostrarResultadoEnLista(result) {
        const listItem = document.createElement("li");
        listItem.textContent = JSON.stringify(result);
        resultList.appendChild(listItem);
    }
    fetch(apiBaseUrl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error al realizar la solicitud");
            }
        })
        .then((data) => {
            resultList.innerHTML = "";
            data.forEach((item) => {
                mostrarResultadoEnLista(item);
            });
        })
        .catch((error) => {
            console.error("Error al realizar la solicitud:", error);
        });
});

const info = document.getElementById("btnGet1");

info.addEventListener("click", () => {

    const input1 = document.getElemetntById("inputGet1Id");
    const newURL = '${apiBaseUrl}/${input1.value}'

    fetch(newURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error al buscar el registro");
            }
        })
        .then((data) => {
            resultList.innerHTML = "";
            mostrarResultadoEnLista(data);
        })
        .catch((error) => {
            console.error("Error al buscar el registro:", error);
        });

})
