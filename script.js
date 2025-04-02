const result = document.getElementById('result');
const textbox = document.getElementById('textbox');
const toCelsius = document.getElementById('toCelsius');
const toFahrenheit = document.getElementById('toFahrenheit');

let temp;

function convert()
{
    if(toCelsius.checked)
    {
        temp = Number(textbox.value);
        temp = (5/9) *(temp-32);
        result.textContent = `In Celsius, the temperature is ${temp}℃`;
    }
    else if(toFahrenheit.checked)
    {
        temp = Number(textbox.value);
        temp = (9*temp/5) + 32;
        result.textContent = `In Fahrenheit, the temperature is ${temp}℉`;
    }
    else
    {
        result.textContent = `Please enter a unit!!`;
    }
}