var itemValue, itemPrice,unitPrice,item1UnitPrice,item2UnitPrice,currentPrice;
//geting unit price 
item1UnitPrice = getCurrentPrice("item1Price");
item2UnitPrice = getCurrentPrice("item2Price");
//add item hendeler
document.getElementById("addItem1").addEventListener("click",function(){
   unitPrice= item1UnitPrice;
   itemValue = updateAddItemValue("item1Value");
   updateAddItemPrice("item1Price");
   updateTotalPrice();
})
document.getElementById("addItem2").addEventListener("click",function(){
   unitPrice= item2UnitPrice;
   itemValue = updateAddItemValue("item2Value");
   updateAddItemPrice("item2Price");
   updateTotalPrice();
})
//remove item hendeler
document.getElementById("removeItem1").addEventListener("click",function(){
   unitPrice= item1UnitPrice;
   itemValue = updateRemoveItemValue("item1Value");
   updateRemoveItemPrice("item1Price");
   updateTotalPrice();
})
document.getElementById("removeItem2").addEventListener("click",function(){
   unitPrice= item2UnitPrice;
   itemValue = updateRemoveItemValue("item2Value");
   updateRemoveItemPrice("item2Price");
   updateTotalPrice();
})
//function
function getCurrentValue(id){
   itemPrice = document.getElementById(id).value;
   itemPrice = parseInt(itemPrice);
   return itemPrice;
}
function getCurrentPrice(id){
   itemPrice = document.getElementById(id).innerText;
   currentPrice = parseInt(itemPrice);
   return currentPrice;
}
function updateAddItemValue(id){
   itemValue = getCurrentValue(id);
   itemValue = itemValue+1;  
   document.getElementById(id).value=itemValue;
   return itemValue;
}
function updateAddItemPrice(id){
   itemPrice= itemValue*unitPrice;
   document.getElementById(id).innerText=itemPrice;
   return itemPrice;
}
function updateRemoveItemValue(id){
   itemValue = getCurrentValue(id);
   if(itemValue>=2){
      itemValue=itemValue-1;
   }
  document.getElementById(id).value=itemValue;
  return itemValue;
}
function updateRemoveItemPrice(id){
   itemPrice = getCurrentPrice(id);
   if(itemValue==1){
      itemPrice=unitPrice;
      document.getElementById(id).innerText=itemPrice;
   }
   if(itemValue>=2){
      itemPrice=itemPrice-unitPrice;
      document.getElementById(id).innerText=itemPrice;
   }
}
 function updateTotalPrice(){
   currentPrice = getCurrentPrice("item1Price");
   currentPrice = currentPrice + getCurrentPrice("item2Price");
   document.getElementById("subTotal").innerText= currentPrice;
   document.getElementById("total").innerText= currentPrice; 
 } 