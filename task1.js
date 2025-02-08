function generatePassword(){
    var length=document.getElementById("length").value
    var includeUppercase=document.getElementById("uppercase")
    var includeLowercase=document.getElementById("lowercase")
    var includeNumbers=document.getElementById("numbers")
    var includeSymbols=document.getElementById("symbols")
    var pass=document.getElementById("password")
    
    let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYXZ"
    let lowerchars="abcdefghijklmnopqrstuvwxyz"
    let symbolschars="!@#$%^&*()_+[]{}<>?"
    let numberschars="1234567890"
   
    let allchars="";
    if(includeLowercase.checked) allchars= allchars+lowerchars
    if(includeUppercase.checked) allchars=allchars+upperchars
    if(includeNumbers.checked) allchars=allchars+numberschars
    if(includeSymbols.checked) allchars=allchars+symbolschars


    if (allchars === "") {
        alert("Please select at least one character type.");
        return;
    }


    let password=""
    for(var i=0;i<length;i++){
        var index=Math.floor(Math.random() * allchars.length)
        password= password+allchars[index]
    }
    pass.value=password;
}