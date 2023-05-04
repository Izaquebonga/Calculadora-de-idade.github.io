function calculate() {
    setInterval(() => {
        let birthdate = new Date(document.getElementById('birthdate').value);
        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();
        let ageInS = ageInMs / 1000; //segundos
        let ageInMins = ageInS / 60; // minutos
        let ageInHrs = ageInMins / 60; // horas
        let ageInDays = ageInHrs / 24; // dias
        let ageInMonths = ageInDays / 30.4375; // meses
        let ageInYears = ageInMonths / 12; // anos

        document.querySelector('#years').innerHTML = Math.floor(ageInYears);
        document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
        document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24);
        document.querySelector('#minutes').innerHTML = Math.floor(ageInMins % 60);
        document.querySelector('#seconds').innerHTML = Math.floor(ageInS % 60);
        document.querySelector('#seconds').style.borderBottom = '1px grey solid';
    }, 1000);
}


    function reset(){
        window.location.reload();
    }