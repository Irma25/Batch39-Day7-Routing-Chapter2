// 1. Get data form ✅
// 2. Validation value ✅
// 3. Display Mail Software ✅
// 4. Object

function submitForm (){

    // 1. Get Data Form
    let name         = document.getElementById('name').value
    let email        = document.getElementById('email').value
    let phoneNumber  = document.getElementById('phonenumber').value
    let subject      = document.getElementById('subject').value
    let message      = document.getElementById('message').value

    

    // 2. Validation Value

    if (name == ''){
        return alert ('Name Input Field Must Be Not Empty');
    }else if (email == ''){
        return alert ('Email Input Field Must Be Not Empty');
    }else if (phoneNumber == ''){
        return alert ('Phone Input Field Must Be Not Empty');
    }else if (subject == ''){
        return alert ('Subject Option Must Be Not Empty');
    }else if (message == ''){
        return alert ('Message Must Be Not Empty');
    }

    // 3.Display Mail Software
    console.log('Open Mail');

    const a = document.createElement ('a');
    //Variabel Email Receiver
    const emailReceiver = "irma.95marshamim@gmail.com";

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo My Name is ${name},%0D%0A${message}, My Phone Number is ${phoneNumber}`
    a.click();

    // 4. Object

    const dataObject = {
        name,
        email,
        phoneNumber,
        subject,
        message
    }

    console.log(dataObject);
}



