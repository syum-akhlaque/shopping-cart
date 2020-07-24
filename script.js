 var itemValue, itemPrice,unitPrice,item1UnitPrice,item2UnitPrice;
 item1UnitPrice = getUnitPrice("item1Price");
 item2UnitPrice = getUnitPrice("item2Price");

//remove item hendeler
document.getElementById("removeItem1").addEventListener("click",function(){
    unitPrice= item1UnitPrice;
    itemValue = updateRemoveItemValue("item1Value");
    updateRemoveItemPrice("item1Price",itemValue,unitPrice);
})
document.getElementById("removeItem2").addEventListener("click",function(){
     unitPrice= item2UnitPrice;
     itemValue = updateRemoveItemValue("item2Value");
     updateRemoveItemPrice("item2Price",itemValue,unitPrice);
})

//add item hendeler
document.getElementById("addItem1").addEventListener("click",function(){
     unitPrice= item1UnitPrice;
     itemValue = updateAddItemValue("item1Value");
     itemValue = updateAddItemValue("item1Value");
     updateAddItemPrice("item1Price",itemValue,unitPrice);
})
document.getElementById("addItem2").addEventListener("click",function(){
    unitPrice= item2UnitPrice;
     itemValue = updateAddItemValue("item2Value");
     updateAddItemPrice("item2Price",itemValue,unitPrice);
   
})
function updateRemoveItemValue(id){
    itemValue = document.getElementById(id).value;
    itemValue = parseInt(itemValue);
    if(itemValue>=2){
        itemValue=itemValue-1;
    }
   document.getElementById(id).value=itemValue;
   return itemValue;
}
function updateRemoveItemPrice(id,itemValue,unitPrice){
    itemPrice = document.getElementById(id).innerText;
    itemPrice = parseInt(itemPrice);

    if(itemValue==1){
        itemPrice=unitPrice;
        document.getElementById(id).innerText=itemPrice;
    }
    if(itemValue>=2){
        itemPrice=itemPrice-unitPrice;
        document.getElementById(id).innerText=itemPrice;
    }
}
function updateAddItemValue(id){
    itemValue = document.getElementById(id).value;
    itemValue = parseInt(itemValue);
    itemValue = itemValue+1;  
    document.getElementById(id).value=itemValue;
    return itemValue;
}
function updateAddItemPrice(id,itemPrice,unitPrice){
    itemPrice= itemValue*unitPrice;
    document.getElementById(id).innerText=itemPrice;
 }
function getUnitPrice(id){
    itemPrice = document.getElementById(id).innerText;
    itemPrice = parseInt(itemPrice);
    return itemPrice;
}
