/**
 * @author : Sanu Vithanage
 * @since : 0.0.1
 **/

hideAll();
$("#dashboardContent").css('display', 'block');
$("#nav").text("Dashboard");

$('#lnkHome').click(function () {
    hideAll();
    $("#dashboardContent").css('display', 'block');
    $("#nav").text("Dashboard");
    text = $('#nav').text();
});


$('#lnkCustomer').click(function () {
    $("#txtCustomerID").focus();
    hideAll();
    $("#customerContent").css('display', 'block');
    $("#nav").text("Customer Manage");
    text = $('#nav').text();
});


$("#lnkItem").click(function () {
    hideAll();
    $("#itemContent").css('display', 'block');
    $("#nav").text("Item Manage");
    text = $('#nav').text();
});

$("#lnkOrders").click(function () {
    hideAll();
    $("#orderContent").css('display', 'block');
    $("#nav").text("Order Manage");
    text = $('#nav').text();


});

function hideAll() {
    $("#dashboardContent,#customerContent,#itemContent,#orderContent").css('display', 'none');
}



