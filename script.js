(function(){

    "use strict"
    let converType = "miles";
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerDiv = document.getElementById("answer");
    const form = document.getElementById("convert");

    document.addEventListener('keydown', function(event){
        var key = event.code;
        
        if(key === 'KeyK'){
            converType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";

        }
        else if(key === 'KeyM'){
            converType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        }

    });

    form.addEventListener('submit', function(event){

        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if(distance){
            if(converType == "miles"){
                let converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
            }
            else{
                let converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;
            }

        }
        else {
            answerDiv.innerHTML = "<h2>Plase provide a number!</h2>"
        }

    });

}())