pizzaType = ["Pepperoni", "Cheese", "Hawaiian", "Meat Lovers", "Bacon"]

function onLoad(){
    for(let i = 0; i < pizzaType.length;i++)
    {
    document.getElementById("inputState selectPizza").innerHTML += `<option>${pizzaType[i]}</option>`
    }
}

window.addEventListener("load",onLoad);