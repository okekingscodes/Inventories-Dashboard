//Script for the tabs in the inventory page
var tabButtons = document.querySelectorAll('.tabContainer .buttonContainer button');
var tabPanels = document.querySelectorAll('.tabContainer .tabPanel');

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
});
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="#111827";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0, '#d7d4d4');

// Popup to add item script
document.querySelector("#show-addBtn").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});
// Popup to add item script
document.querySelector("#newProduct").addEventListener("click", function(){
    document.querySelector(".material-in-use").classList.add("active");
});
document.querySelector(".material-in-use .close-btn").addEventListener("click", function(){
    document.querySelector(".material-in-use").classList.remove("active");
});


// Add new product to warehouse function

function addNewProduct() {
    var pName = document.addProductToWarehouse.productName.value;
    var pId = document.addProductToWarehouse.productId.value;
    var specification = document.addProductToWarehouse.specification.value;
    var location = document.addProductToWarehouse.location.value;
    var quantity = document.addProductToWarehouse.quantity.value;

    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = pName;
    td2.innerHTML = pId;
    td3.innerHTML = specification;
    td4.innerHTML = location;
    td5.innerHTML = quantity;

    document.getElementById("warehouse").appendChild(tr);
}
// Popup script for product details
//$('table tbody tr').click(function(){
    //var row = $(this);  
    //var data = [];  
    //row.find('td').not(':first').each(function(){
      //data.push($(this).text());   
    //});  
    //$('#myModal .modal-body').html(data.join(''));
    //$('#myModal').modal('show');
  //});







