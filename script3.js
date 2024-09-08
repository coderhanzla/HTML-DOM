function validate() {
    const username = document.getElementById("Username").value;
    const pass = document.getElementById("Password").value;
     let msg = "";
     const msgbox = document.getElementById("p1");

     if (username === '') {
        msg = "Plese Enter The UserName";
        msgbox.style.color = "red";
     }

     else if (pass === '') {
         msg = "Plese Enter The Password ";
         msgbox.style.color = "red";
     }
     else{
        msg = "Login Succesful";
            msgbox.style.color = "green";
 
     }

     msgbox.innerText = msg;


}





