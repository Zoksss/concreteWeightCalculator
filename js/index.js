const cubeoidButton = document.querySelector("#cubeoidButton");
const plateButton = document.querySelector("#cylinderButton");

const diameterInput = document.querySelector("#diameterInput");
const tubeDiameterInput = document.querySelector("#tubeDiameterInput");
const heightInput = document.querySelector("#heightInput");

const diameterP = document.querySelector("#diameterP");
const tubeDiameterP = document.querySelector("#tubeDiameterP");

const calculateBtn = document.querySelector("#calculateBtn");

const volumeElement = document.querySelector("#volumeElement");

const sandKg = document.querySelector("#sandKg");
const cementKg = document.querySelector("#cementKg");
const agregateKg = document.querySelector("#agregateKg");

const concreteDensity = 2400;  //kg|m3

let isPlate = true;

let mass = 0, V = 0;


cubeoidButton.addEventListener("click", () => {
    console.log("test cub");
    isPlate = false;
    cubeoidButton.classList.add("activeBtn");
    plateButton.classList.remove("activeBtn");

    diameterP.innerHTML = "Lenght (cm)";
    tubeDiameterP.innerHTML = "Width (cm)";
    diameterInput.value = 0;
    tubeDiameterInput.value = 0;
    heightInput.value = 0;
});

plateButton.addEventListener("click", () => {
    isPlate = true;
    console.log("test plate");
    plateButton.classList.add("activeBtn");
    cubeoidButton.classList.remove("activeBtn");

    diameterP.innerHTML = "Diameter (cm)";
    tubeDiameterP.innerHTML = "Tube Diameter (cm)";
    diameterInput.value = 0;
    tubeDiameterInput.value = 0;
    heightInput.value = 0;
});


calculateBtn.addEventListener("click", () => {
    if (isPlate) {
        let d = parseInt(diameterInput.value) || 0;
        let td = parseInt(tubeDiameterInput.value) || 0;
        let h = parseInt(heightInput.value) || 0;

        if (!isNaN(d) && !isNaN(td) && !isNaN(h)) {
            V = (d / 2) * (d / 2) * 3.14 * h - ((td / 2) * (td / 2) * 3.14 * h);
            volumeElement.innerHTML = "Volume: " + V.toFixed(0) + " cm&sup3;";
            mass = V * 0.000001 * concreteDensity;
            updateStats();
        }
    }
    else {
        let l = parseInt(diameterInput.value) || 0;
        let w = parseInt(tubeDiameterInput.value) || 0;
        let h = parseInt(heightInput.value) || 0;

        if (!isNaN(l) && !isNaN(w) && !isNaN(h)) {
            V = l * w * h;
            mass = V * 0.000001 * concreteDensity;
            updateStats();
        }
    }
});

const updateStats = () => {
    massElement.innerHTML = "Mass: " + mass.toFixed(1) + " kg";
    sandKg.innerHTML = "Sand: " + ((mass / 6) * 2).toFixed(1) + "kg";
    cementKg.innerHTML = "Cement:" + ((mass / 6) * 1).toFixed(1) + "kg";
    agregateKg.innerHTML = "Aggregate: " + ((mass / 6) * 3).toFixed(1) + "kg";
};
