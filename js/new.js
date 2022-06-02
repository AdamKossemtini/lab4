'use strict';

function AddProduct() {

    let form = document.getElementById("PForm");
    let PNumber = form.elements['PNumber'].value;
    let PName = form.elements['PName'].value;
    let Q = form.elements['Q'].value;
    let Price = form.elements['ThePrice'].value;
    let supplier = form.elements['supplier'].value;
    let date = form.elements['Date'].value;

    let pop = "Form Data: \nProduct Number: " + PNumber 
        +"\nProduct Name: " + PName 
        + "\nQuantity: " + Q
        + "\nUnit Price: " + Price
        + "\nDate: " + Date;
    
    alert(pop)    

    
}