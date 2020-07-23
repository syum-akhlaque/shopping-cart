//remove item hendeler
document.getElementById("removeItem").addEventListener("click",function(){
    var itemValue = updateRemoveItemValue("itemValue")
})
//add item hendeler
document.getElementById("addItem").addEventListener("click",function(){
    var itemValue = updateAddItemValue("itemValue") 
})


function updateRemoveItemValue(id){
    var itemValue = document.getElementById(id).value;
    if(itemValue>=2){
        itemValue=itemValue-1;
    }
   document.getElementById("itemValue").value=itemValue;
}
function updateAddItemValue(id){
    var itemValue = document.getElementById("itemValue").value;
    itemValue = parseInt(itemValue);
    itemValue = itemValue+1;  
    console.log(itemValue);
    document.getElementById("itemValue").value=itemValue;
}