pizzaType = ["Pepperoni", "Cheese", "Hawaiian", "Meat Lovers", "Bacon"]

function onLoad(){
    for(let i = 0; i < pizzaType.length;i++)
    {
    document.getElementById("inputState selectPizza").innerHTML += `<option>${pizzaType[i]}</option>`
    }
    for(let i = 0; i <= 9; i++){
        document.getElementById("inputState PizzaNumber").innerHTML += `<option>${i + 1}</option>`
    }
}

function grabInput(){
    
}
window.addEventListener("load",onLoad);
window.addEventListener("click", grabInput);