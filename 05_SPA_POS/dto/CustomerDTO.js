/**
 * @author : Sanu Vithanage
 * @since : 0.0.1
 **/


function Customer(id, name, address, salary) {
    var __id = id;
    var __name = name;
    var __address = address;
    var __salary = salary;

    this.getCustomerID = function () {
        return __id;
    }

    this.setCustomerID = function (newID) {
        __id = newID;
    }

}
