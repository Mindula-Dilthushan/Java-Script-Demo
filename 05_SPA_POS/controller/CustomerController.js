/**
 * @author : Sanu Vithanage
 * @since : 0.0.1
 **/
// Customer Section Events
//select customer button and bind a event

$('#btnCustomer').click(function () {
    saveCustomer();
});

function  saveCustomer(){
    $('#tblCustomer>tr').off('click'); //detach all the tr click events
    $('#tblCustomer>tr').off('dblclick'); //detach all the tr click events

    //gather details from inputs
    let cusID = $("#txtCustomerID").val();
    let cusName = $("#txtCustomerName").val();
    let cusAddress = $("#txtCustomerAddress").val();
    let cusSalary = $("#txtCustomerSalry").val();

    var customer=new Customer(cusID,cusName,cusAddress,cusSalary);
    customerDB.push(customer);


    // add gathered details to the table
    let row = "<tr><td>" + cusID + "</td><td>" + cusName + "</td><td>" + cusAddress + "</td><td>" + cusSalary + "</td></tr>";

    //template literals
    let row2 = `<tr><td>${cusID}</td><td>${cusName}</td><td>${cusAddress}</td><td>${cusSalary}</td></tr>`;

    $('#tblCustomer').append(row2);

    clearCustomerTextFields();

    //Bind click event for all table rows
    //Filling back the input fields from the selected table row details
    //get values of selected row
    $('#tblCustomer>tr').click(function () {
        //get values of selected row
        let id = $(this).children('td:eq(0)').text();
        let name = $(this).children('td:eq(1)').text();
        let address = $(this).children('td:eq(2)').text();
        let salary = $(this).children('td:eq(3)').text();

        //set values for text fileds
        $("#txtCustomerID").val(id);
        $("#txtCustomerName").val(name);
        $("#txtCustomerAddress").val(address);
        $("#txtCustomerSalry").val(salary);

    });

    $("#tblCustomer>tr").on('dblclick',function (){
        $(this).remove();
    });
}



//Filling back the input fields from the selected table row details
// $('#tblCustomer>tr').click(function (){
//    let id= $($(this).children().get(0)).text();
//    let name= $($(this).children().get(1)).text();
//    let address= $($(this).children().get(2)).text();
//    let salary= $($(this).children().get(3)).text();
//     console.log(id,name,address,salary);
// });

// clear all text field and focus cus id
function clearCustomerTextFields() {
    $("#txtCustomerID").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerSalry").val("");
    $("#txtCustomerID").focus();
}

// store customerID validation
let cusRegEx=/^(C00-)[0-9]{1,3}$/;



$("#txtCustomerID").on('keyup',function (event){
    if (event.key=="Enter"){
        $('#txtCustomerName').focus();
    }

    let inputID=$("#txtCustomerID").val();
    if (cusRegEx.test(inputID)){
        $("#txtCustomerID").css('border','2px solid green');
        $("#lblcusid").text("");
    }else{
        $("#txtCustomerID").css('border','2px solid red');
        $("#lblcusid").text('Your Input Data Format is Wrong (C00-001)');
    }
});

$("#txtCustomerName").on('keydown',function (event){
    if (event.key=="Enter"){
        $('#txtCustomerAddress').focus();
    }
});

$("#txtCustomerAddress").on('keydown',function (event){
    if (event.key=="Enter"){
        $('#txtCustomerSalry').focus();
    }
});


$("#txtCustomerSalry").on('keydown',function (event){
    if (event.key=="Enter"){
        saveCustomer();
    }
});


$('#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalry').on('keydown',function (event){
    if (event.key=="Tab"){
        event.preventDefault();
    }
});


