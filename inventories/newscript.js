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



var selectedRow = null

function addNewProduct() {
    if (validate()) {
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
        else
        updateRecord(formData);
    resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["productName"] = document.getElementById("productName").value;
    formData["productId"] = document.getElementById("productId").value;
    formData["specification"] = document.getElementById("specification").value;
    formData["location"] = document.getElementById("location").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["runNo"] = document.getElementById("runNo").value;
    formData["description"] = document.getElementById("description").value;
    formData["status"] = document.getElementById("status").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("warehouse").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.productId;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.specification;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.location;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.quantity;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.runNo;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.description;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.status;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("productName").value = "";
    document.getElementById("productId").value = "";
    document.getElementById("specification").value = "";
    document.getElementById("location").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("runNo").value = "";
    document.getElementById("description").value = "";
    document.getElementById("status").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("specification").value = selectedRow.cells[2].innerHTML;
    document.getElementById("location").value = selectedRow.cells[3].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[4].innerHTML;
    document.getElementById("runNo").value = selectedRow.cells[5].innerHTML;
    document.getElementById("description").value = selectedRow.cells[6].innerHTML;
    document.getElementById("status").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productName;
    selectedRow.cells[1].innerHTML = formData.productId;
    selectedRow.cells[2].innerHTML = formData.specification;
    selectedRow.cells[3].innerHTML = formData.location;
    selectedRow.cells[4].innerHTML = formData.quantity;
    selectedRow.cells[5].innerHTML = formData.runNo;
    selectedRow.cells[6].innerHTML = formData.description;
    selectedRow.cells[7].innerHTML = formData.status;
}
function onDelete(td) {
    if(confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("warehouse").deleteRow(row.rowIndex);
        resetForm();
    } 
}
function validate() {
    isValid = true;
    if (document.getElementById("productId").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}