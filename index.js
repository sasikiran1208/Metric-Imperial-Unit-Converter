let num = document.getElementById("number");
    let btn = document.getElementById("convert");
    let length_result = document.getElementById("length-result");
    let volume_result = document.getElementById("volume-result");
    let mass_result = document.getElementById("mass-result");

    btn.addEventListener("click", function () {
        let value = parseFloat(num.value);

        let meters_feet = (value * 3.28084).toFixed(3);
        let feet_meters = (value / 3.28084).toFixed(3);

        let liters_gallons = (value * 0.264172).toFixed(3);
        let gallons_liters = (value / 0.264172).toFixed(3);

        let kilos_pounds = (value * 2.20462).toFixed(3);
        let pounds_kilos = (value / 2.20462).toFixed(3);

        length_result.innerHTML = `${value} meters = ${meters_feet} feet | ${value} feet = ${feet_meters} meters`;
        volume_result.innerHTML = `${value} liters = ${liters_gallons} gallons | ${value} gallons = ${gallons_liters} liters`;
        mass_result.innerHTML = `${value} kilos = ${kilos_pounds} pounds | ${value} pounds = ${pounds_kilos} kilos`;
    });