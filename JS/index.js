function getName(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var dayOfMonth = document.getElementById("day").value;
    var date = new Date (`${year}-${month}-${dayOfMonth}`);
    var birthDay = date.getDay();
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var result = document.getElementById("result");
    var days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwaku", "Kwabena", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "AKua", "Yaa", "Afua", "Ama"];
    if (year == "" || year.length < 4 || year.length > 4){
        alert("Hey you need to enter a valid year!");
    }
    else if (month < 0 || month > 12 ){
        alert("Hey you need to enter a valid month!");
    }
    else if( dayOfMonth < 0 || dayOfMonth >31) {
        alert("Hey you need to re-enter a valid day!");
    }
    else if (male.checked == false && female.checked == false){
        alert("You need to specify your gender!");
    }
    else if (male.checked == true){
        result.innerHTML = "Hey " + maleNames[birthDay] +  ". Since you were born on a  " + days[birthDay] + " that's your Akan name.";
    } 
    else if (female.checked == true){
        result.innerHTML = "Hey " + femaleNames[birthDay] +  ". Since you were born on a " + days[birthDay] + " that's your Akan name.";
    }
    else{
        alert("Come on Akan, just run!")
    }
}