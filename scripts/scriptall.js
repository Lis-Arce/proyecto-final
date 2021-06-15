function vermas(id) {
    if (id == "mas") {
        document.getElementById("desplegar").style.display = "block";
        document.getElementById("mas").style.display = "none";
    }
    else {
        document.getElementById("desplegar").style.display = "none";
        document.getElementById("mas").style.display = "inline";
    }
}

function showCategory(type) {
    var mascotasElement = document.getElementById("mascotas");
    var paseosElement = document.getElementById("paseos");
    var hobbiesElement = document.getElementById("hobbies");

    var mascotasBtnElement = document.getElementById("mascotas-btn");
    var paseosBtnElement = document.getElementById("paseos-btn");
    var hobbiesBtnElement = document.getElementById("hobbies-btn");

    switch (type) {
        case "mascotas":
            paseosElement.style.display = "none";
            hobbiesElement.style.display = "none";
            mascotasElement.style.display = "block";

            paseosBtnElement.style.backgroundColor = "#005bbb";
            hobbiesBtnElement.style.backgroundColor = "#005bbb;";
            mascotasBtnElement.style.backgroundColor = "#ffff00";

            break;
        case "paseos":

            hobbiesElement.style.display = "none";
            mascotasElement.style.display = "none";
            paseosElement.style.display = "block";

            mascotasBtnElement.style.backgroundColor = "#005bbb";
            hobbiesBtnElement.style.backgroundColor = "#005bbb";
            paseosBtnElement.style.backgroundColor = "#ffff00";

            break;
        default:
            mascotasElement.style.display = "none";
            paseosElement.style.display = "none";
            hobbiesElement.style.display = "block";

            paseosBtnElement.style.backgroundColor = "#005bbb";
            mascotasBtnElement.style.backgroundColor = "#005bbb";;
            hobbiesBtnElement.style.backgroundColor = "#ffff00";
            break;

    }
}
