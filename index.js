
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }

}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false

    var email = document.forms['myForm']["femail"].value;
    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
    seterror("email", "*Please enter a valid e-mail address ");
    returnval = false;
    }
    if (email.length<6){
        seterror("email", "*Email length is too short");
        returnval = false; 
    }
   
    
    //password Validation
    var password = document.forms['myForm']["spass"].value;
    if (password.length < 6){
        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("password", "*Password should be atleast 6 characters long!");
        returnval = false;
    } /*else if(password.length>20){
        seterror("password", "*Password too long!");
        returnval = false;
    } else if (password.search(/\d/) == -1) {
        seterror("password","no_num");
        returnval = false;
    } else if (password.search(/[a-zA-Z]/) == -1) {
        seterror("password","no_letter");
        returnval = false;
    } else if (password.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
        seterror("password","bad_char");
        returnval = false;
    }*/

    return returnval;
}


document.addEventListener("click", () =>{
    Notification.requestPermission().then(perm =>{
        if(perm === "granted"){
            new Notification("Please Sign In");
        } else{
            Notification.close();
        }
    })
}, {once: true});