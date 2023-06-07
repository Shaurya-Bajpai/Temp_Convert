const Calculate = () =>
{
    const inp = document.getElementById('degree').value;
    const tempo = document.getElementById('temp_diff');
    const val = temp_diff.options[tempo.selectedIndex].value;
    const c = (celsius) =>
    {
        let f = ((celsius * 1.8) + 32).toFixed(2);
        return f;
    }
    const fah = (fahrenheit) =>
    {
        let cel = ((fahrenheit - 32) / 1.8).toFixed(2);
        return cel;
    }

    if(val == 'celsius')
    {
        document.getElementById("result").innerHTML = c(inp) + "&#176; Fahrenheit";
    }
    else
    {
        document.getElementById("result").innerHTML = fah(inp) + "&#176; Celsius";
    }
}













// const CelsiusInput = document.getElementById("celsius");
// const FahrenheitInput = document.getElementById("fahrenheit");
// const KelvinInput = document.getElementById("kelvin");
// const Degree = document.getElementById("degree");
// let btn = document.querySelector(".button button")
// const inp = document.getElementsByClassName("input");

// for(let i=0; i<on.length; i++)
// {
//     let input = inp[i];

//     input.addEventListener("input", function(e) {
//         let value = parseFloat(e.target.value);
//         switch(e.target.name)
//         {
//             case "celsius":
//                 FahrenheitInput.value = (value * 1.8) + 32;
//                 KelvinInput.value = value + 273;
//                 break;
            
//             case "fahrenheit":
//                 CelsiusInput.value = (value - 32) / 1.8;
//                 KelvinInput.value = ((value - 32) / 1.8) + 273;
//                 break;
            
//             case "kelvin":
//                 CelsiusInput.value = value - 273;
//                 FahrenheitInput.value = ((value - 273) * 1.8) + 32;
//                 break;
//         }
//     });
//     btn.addEventListener('click', () => {
//         Degree.value = ""
//         FahrenheitInput.value = ""
//         KelvinInput.value = ""
//     })
// }