window.onload = function() {

    const hourHand = document.querySelector('.hourHand');
    const minuteHand = document.querySelector('.minuteHand');
    const secondHand = document.querySelector('.secondHand');
    const time = document.querySelector('.time');
    const date = document.querySelector('.date');
    const city = document.getElementById('city');

    function getDifferentCountryTime(){
        const currentDate = new Date()
        let selectedCity = city.options[city.selectedIndex].text
        return currentDate.toLocaleTimeString('en-US', { timeZone: selectedCity})

    }
    function getDifferentCountryDate(){
        let selectedCity = city.options[city.selectedIndex].text
        const currentDate = new Date()
        return currentDate.toLocaleDateString('en-US', { timeZone: selectedCity })

    }

    function setDate(){
        let currentTime = getDifferentCountryTime();
        let timeArray = currentTime.split(":");
        const second = timeArray[2].split(" ")[0];
        const secondDeg = ((second / 60) * 360) + 360;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;

        const minute = timeArray[1];
        const minuteDeg = ((minute / 60) * 360);
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        const hour = timeArray[0];
        const hourDeg = ((hour / 12 ) * 360 );
        hourHand.style.transform = `rotate(${hourDeg}deg)`;

        time.innerHTML = '<span>' + '<strong>' + getDifferentCountryTime() + '</strong>' + '</span>';
        date.innerHTML = '<span>' + '<strong>' + getDifferentCountryDate() + '</strong>' + '</span>';

    }

    setInterval(setDate, 1000);

}
