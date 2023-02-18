
    document.querySelector("button").onclick= function lifeInWeeks(age) {

        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var age = document.getElementById("yourAge").value;
        //life remaining in span of 90 years of human life
        var yearRemaining = 90 - age;
    
        //Days left to live
        var days = yearRemaining * 365;
    
        //Weeks left to live
        var weeks = yearRemaining * 52;
    
        //Months left to live
        var months = yearRemaining * 12;
        
        document.getElementById("demo").innerHTML="Hello "+ `${firstName}`+" "+`${lastName}`+ ", You Have " +`${days}`+" Days "+`${weeks}`+" Weeks "+`${months}`+ " Months left to live your life.";
    
    };

