//----------------- S.out Type 3---------------------

// alert("Hello.01_Core_2");
// console.log("Hello..01_Core_2");
// document.write("Hello...01_Core_2");


//----------------- Comment Type 2---------------------

// alert("Hello.01_Core_2");

/*
console.log("Hello..01_Core_2");
document.write("Hello...01_Core_2");
 */

//----------------- Loosly Type ---------------------

// var name = "Mindula";
// console.log(name);
// console.log(typeof name);

//----------------- Dynamic Type --------------------

// var age = 10;
// console.log(typeof age);
// age = "no age";
// console.log(typeof age);

//----------------- Declaration Type 3--------------------
// 01. Var
// 02. Let
// 03. Const

// 01.var --------------------------

    // Var
    // * No scope satisfaction
    // * variable name can be duplicate
    // * Support for dynamic typing

        /*
            var name = "IJSE"; //global scope
            if (true){
                var address="galle";
                console.log(name);
            }
            console.log(address); //no error
        */

    // var name = "Mindula"; //name is already defined but no any error


// 02.Let --------------------------

    // Let (Declaration)

    // * Variable name duplicate (No)
        /*
        let name = "mindula";
        console.log(name);

        let name = "mindula2";
        console.log(name);
        */

    // * Scope satisfied
        /*
        if (true){
             let address = "galle";
             console.log(address); //valid
        }
        console.log(address); //error
        */

    // * Dynamic type support
        /*
        let salary = 100;
        console.log(typeof salary); //number

        salary = "100";
        console.log(typeof salary); //string
        */

// 03.Const --------------------------

    //must have a initialize value when the variable declare

    // * variable name duplicate(No)
       /*
            const id = "C001"; // valid
            const id = "C002"; // error //cannot duplicate name
            console.log(typeof id);
       */

    // * Scope satisfied
        /*
            {
                const  name = "Mindula";
            }
            // console.log(name);// error
        */

    // * One time declaration . cannot change values after declare
        /*
            const age=10;
            // age=20; //error  cannot change values after declaration
        */

//----------------- Variables ---------------------

    // * Case Sensitive
        /*
            let name = "Mindula0";
            let Name = "Mindula1";
        */

    // * Variable Names
        /*
            let azHello="JS";
            let _myName = "Mindula2";
            let $company = "Alpha";

            // let 1a = "10"; // error numbers cannot be used for variables names as the first character
            let _1a = "10";  // valid
        */


