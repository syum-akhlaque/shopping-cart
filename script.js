var itemValue, itemPrice,unitPrice,item1UnitPrice,item2UnitPrice,subTotal,total,newPrice,currentPrice;
item1UnitPrice = getUnitPrice("item1Price");
item2UnitPrice = getUnitPrice("item2Price");

//add item hendeler
document.getElementById("addItem1").addEventListener("click",function(){
   unitPrice= item1UnitPrice;
   itemValue = updateAddItemValue("item1Value");
   updateAddItemPrice("item1Price",itemValue,unitPrice);
   updateAddItemTotalPrice();
})
document.getElementById("addItem2").addEventListener("click",function(){
   unitPrice= item2UnitPrice;
   itemValue = updateAddItemValue("item2Value");
   updateAddItemPrice("item2Price",itemValue,unitPrice);
   updateAddItemTotalPrice();
})
//remove item hendeler
document.getElementById("removeItem1").addEventListener("click",function(){
   unitPrice= item1UnitPrice;
   itemValue = updateRemoveItemValue("item1Value");
   updateRemoveItemPrice("item1Price",itemValue,unitPrice);
   updateRemoveItemTotalPrice();
})
document.getElementById("removeItem2").addEventListener("click",function(){
   unitPrice= item2UnitPrice;
   itemValue = updateRemoveItemValue("item2Value");
   updateRemoveItemPrice("item2Price",itemValue,unitPrice);
   updateRemoveItemTotalPrice();
})

function getUnitPrice(id){
   itemPrice = document.getElementById(id).innerText;
   itemPrice = parseInt(itemPrice);
   return itemPrice;
}
function getCurrentPrice(id){
   itemPrice = document.getElementById(id).innerText;
   currentPrice = parseInt(itemPrice);
   return currentPrice;
}
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
   return itemPrice;
}

function updateAddItemTotalPrice(){
   currentPrice = getCurrentPrice("subTotal");
   console.log(currentPrice);
   subTotal= currentPrice+unitPrice;
   total = subTotal;
   document.getElementById("subTotal").innerText= subTotal;
   document.getElementById("total").innerText= total; 
 } 
 function updateRemoveItemTotalPrice(){
   currentPrice = getCurrentPrice("subTotal");
   console.log(currentPrice);
   subTotal= currentPrice - unitPrice;
   total = subTotal;
   document.getElementById("subTotal").innerText= subTotal;
   document.getElementById("total").innerText= total; 
 } 