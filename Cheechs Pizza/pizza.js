pizzaType = ["Pepperoni", "Cheese", "Hawaiian", "Meat Lovers", "Bacon"]

function onLoad(){
    for(let i = 0; i < pizzaType.length;i++)
    {
    document.getElementById("selectPizza").innerHTML += `<option>${pizzaType[i]}</option>`
    }
    for(let i = 0; i <= 9; i++){
        document.getElementById("PizzaNumber").innerHTML += `<option>${i + 1}</option>`
    }
};

function grabInput(){
    var tabName = document.getElementById("inputName tabName").value;
    var phoneNum = document.getElementById("inputPhone pNum").value;
    //var selectedPizza = document.getElementById("inputState selectPizza").options[selectedIndex].value;
    
  
        document.getElementById("OrderOut").innerHTML += `<p>${tabName}</p>`;
        document.getElementById("OrderOut").innerHTML += `<p>${phoneNum}</p>`;
    //    document.getElementById("OrderOut").innerHTML += `<p>${selectedPizza}</p>`;
    return false;

};
window.addEventListener("load",onLoad);
document.getElementById("button").addEventListener("click", grabInput);

