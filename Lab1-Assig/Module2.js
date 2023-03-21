function Details(Name, Birthdate) {
    var today=new Date();
    if(Birthdate.getFullYear()>=2023)
    {
        console.log("It's not valid!!");
    }
    else{
        var age=today.getFullYear()-Birthdate.getFullYear();
        console.log("Hello " + Name + " Your age now is: " + age+" Year")
    }
}

module.exports = {
    Data: Details
}