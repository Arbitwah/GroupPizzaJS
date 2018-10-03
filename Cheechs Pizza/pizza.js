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
    document.getElementById("OrderOut").innerHTML = "";
    var Name = document.getElementById("Name").value;
    var phoneNum = document.getElementById("pNum").value;
    var selectedPizza = document.getElementById("selectPizza").value;
    var PizzaNumber = document.getElementById("PizzaNumber").value;
    var PizzaPrice = 14.99;
    var tax = 7.6;
    var total = ((PizzaNumber * PizzaPrice) *(tax/100))+(PizzaNumber*PizzaPrice);


  
    document.getElementById("OrderOut").innerHTML +=`Thanks for ordering from Cheech's Pizza\n
     Customer Name: ${Name}\n
     Customer Phone Number: ${phoneNum}\n
     Specialty Pizza Selection: ${selectedPizza}\n
     Number of Pizza's Ordered: ${PizzaNumber}\n
     Price Per Pizza: ${PizzaPrice}\n
     Tax: ${tax}\n
     Total:${parseFloat(total.toFixed(2))}\n`;

    return false;

};

window.addEventListener("load",onLoad);


