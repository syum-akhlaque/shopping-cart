//remove item hendeler

document.getElementById("removeItem1").addEventListener("click",function(){
    var itemValue = updateRemoveItemValue("item1Value");
})
document.getElementById("removeItem2").addEventListener("click",function(){
    var itemValue = updateRemoveItemValue("item2Value");
})
//add item hendeler
document.getElementById("addItem1").addEventListener("click",function(){
    var itemValue = updateAddItemValue("item1Value") ;
    
})
document.getElementById("addItem2").addEventListener("click",function(){
    var itemValue = updateAddItemValue("item2Value") ;
   
})


function updateRemoveItemValue(id){
    var itemValue = document.getElementById(id).value;
    itemValue = parseInt(itemValue);
    if(itemValue>=2){
        itemValue=itemValue-1;
    }
   document.getElementById(id).value=itemValue;
}
function updateAddItemValue(id){
    var itemValue = document.getElementById(id).value;
    itemValue = parseInt(itemValue);
    itemValue = itemValue+1;  
    document.getElementById(id).value=itemValue;
}