    /*Required variables for api url*/
    const apiKey= "a26399ecc08debeee3f4a195c4f0dbf3";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=matric&q=";

    
    /*Variables required to call url*/
    const searchBox = document.querySelector(".search input");
    const searchButton = document.querySelector(".search button");
    

    /*The function to be called to see the weather conditions of the relevant city*/
    async function checkWeather(cityName) {
        const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

        if(response?.status == 404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        } else {
        var data = await response.json();
        const weatherIcon = document.querySelector(".weather-icon");
        const weatherStatus =data?.weather?.[0]?.main;
        const weatherIconName = weatherStatus?.toLowerCase(); 

        document.querySelector(".city").innerHTML= data?.name;
        document.querySelector(".temp").innerHTML= Math.round(data?.main?.temp) + "°c";
        document.querySelector(".humidity").innerHTML= data?.main?.humidity + "%";
        document.querySelector(".wind").innerHTML= data?.wind?.speed +"km/h";
        weatherIcon.src= "images/"+weatherIconName+".png" ;


        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

        }
    }


    /*To call the checkWeather function when the button is clicked*/
    searchButton.addEventListener("click" , ()=>{
        checkWeather(searchBox?.value);    
    });
