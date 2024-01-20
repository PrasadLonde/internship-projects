function convertTemperature() {
    // Get user input
    let temperatureInput = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;

    // Validate input is a number
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Convert temperature
    let convertedTemperature;
    if (unit === "celsius") {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        displayResult(convertedTemperature, "Fahrenheit");
    } else if (unit === "fahrenheit") {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        displayResult(convertedTemperature, "Celsius");
    } else if (unit === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        displayResult(convertedTemperature, "Kelvin");
    }
}

function displayResult(temperature, unit) {
    document.getElementById("result").innerText = `Converted Temperature: ${temperature.toFixed(2)} ${unit}`;
}
