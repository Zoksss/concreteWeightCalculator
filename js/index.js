const cubeoidButton = document.querySelector("#cubeoidButton");
const cylinderButton = document.querySelector("#cylinderButton");

const radiusInput = document.querySelector("#radiusInput");
const tubeRadiusInput = document.querySelector("#tubeRadiusInput");
const heightInput = document.querySelector("#heightInput");

const calculateBtn = document.querySelector("#calculateBtn");

const volumeElement = document.querySelector("#volumeElement");

const sandKg = document.querySelector("#sandKg");
const cementKg = document.querySelector("#cementKg");
const agregateKg = document.querySelector("#agregateKg");

const concreteDensity = 2400;  //kg|m3

calculateBtn.addEventListener("click", () => {
    let r = parseInt(radiusInput.value) || 0;
    let tr = parseInt(tubeRadiusInput.value) || 0;
    let h = parseInt(heightInput.value) || 0;

    if(!isNaN(r) && !isNaN(tr) && !isNaN(h)){
        let V = r*r*3.14*h - (tr*tr*3.14*h);
        volumeElement.innerHTML = "Volume: " + V.toFixed(0)  + " cm&sup3;";
        //mass = density * volume
        let m3 = V * 0.000001;
        let mass = m3 * concreteDensity;
        massElement.innerHTML = "Mass: " + mass.toFixed(1)  + " kg";
        
        sandKg.innerHTML = "Sand: 10kg";
        cementKg.innerHTML = "Cement: 10kg";
        agregateKg.innerHTML = "Aggregate: 10kg";
        
    }
});