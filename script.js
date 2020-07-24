var itemValue, itemPrice,unitPrice;

// unitPrice= getUnitPrice("item1Price");
// getUnitPrice("item2Price");
//remove item hendeler
document.getElementById("removeItem1").addEventListener("click",function(){
    //unitPrice= getUnitPrice(id);
    itemValue = updateRemoveItemValue("item1Value");
    updateRemoveItem1Price("item1Price",itemValue);
})
document.getElementById("removeItem2").addEventListener("click",function(){
     //unitPrice= getUnitPrice(id);
     itemValue = updateRemoveItemValue("item2Value");
     updateRemoveItem2Price("item2Price",itemValue);
})

//add item hendeler
document.getElementById("addItem1").addEventListener("click",function(){
     itemValue = updateAddItemValue("item1Value");
     itemPrice= itemValue*1219
     document.getElementById("item1Price").innerText=itemPrice;
})
document.getElementById("addItem2").addEventListener("click",function(){
     itemValue = updateAddItemValue("item2Value");
     itemPrice= itemValue*59
     document.getElementById("item2Price").innerText=itemPrice;
   
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
function updateRemoveItem1Price(id,itemValue){
    itemPrice = document.getElementById(id).innerText;
    itemPrice = parseInt(itemPrice);
   // console.log("unit price 1",unitPrice);

    if(itemValue==1){
        itemPrice=1219;
        document.getElementById(id).innerText=itemPrice;
    }
    if(itemValue>=2){
        itemPrice=itemPrice-1219;
        document.getElementById(id).innerText=itemPrice;
    }
}
function updateRemoveItem2Price(id,itemValue){
    itemPrice = document.getElementById(id).innerText;
    itemPrice = parseInt(itemPrice);
    
   // console.log("unit price 2",unitPrice);
    if(itemValue==1){
        itemPrice=59;
        document.getElementById(id).innerText=itemPrice;
    }
    if(itemValue>=2){
        itemPrice=itemPrice-59;
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
function getUnitPrice(id){
    itemPrice = document.getElementById(id).innerText;
    itemPrice = parseInt(itemPrice);
    return itemPrice;

}
// console.log(itemPrice);
// console.log(typeof(itemPrice));