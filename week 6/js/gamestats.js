 // create a function to grab the form inpits and display them in the text box
 function submitForm(){
    // prevent tghe form from actually submitting anbd refreshing the page
    event.preventDefault();
    // get  out form inputs
    var userName = document.getElementById("txtUserName").value;
    var weapon = document.getElementById("txtWeapon").value;
    var health = document.getElementById("txtHealth").value;
    var points = document.getElementById("txtPoints").value;

    //create a string to hold the information
    var output = "User Name: " + userName + "\n\n"; // \n is the newline character
    output += "Weapon: " + weapon + "\n\n";
    output += "Health/Damage: " + health + "\n\n";
    output += "Point Total: " + points;

    // add out formatted string to the textarea
    document.getElementById("txtAOutput").value = output;
}