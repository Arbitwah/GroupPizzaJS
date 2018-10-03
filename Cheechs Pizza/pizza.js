pizzaType = ["Pepperoni", "Cheese", "Hawaiian", "Meat Lovers", "Bacon"]

function onLoad(){
    for(let i = 0; i < pizzaType.length;i++)
    {
    document.getElementById("selectPizza").innerHTML += `<option>${pizzaType[i]}</option>`
    }
    for(let i = 0; i <= 9; i++){
        document.getElementById("PizzaNumber").innerHTML += `<option>${i + 1}</option>`
    }
    document.getElementById("btnPress").addEventListener("click",grabInput);
};

function grabInput(){
    var tabName = document.getElementById("tabName").value;
    var phoneNum = document.getElementById("pNum").value;
    var selectedPizza = document.getElementById("selectPizza").options[selectedIndex].value;
    
  
        document.getElementById("OrderOut").innerHTML += `${tabName}\n`;
        document.getElementById("OrderOut").innerHTML += `${phoneNum}\n`;
        document.getElementById("OrderOut").innerHTML += `${selectedPizza}`;
    return false;

};

window.addEventListener("load",onLoad);


