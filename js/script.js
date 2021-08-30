// Upcoming event Timer

(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let event = 'Oct 1, 2021 00:00:00',
        countDown = new Date(event).getTime(),
        x = setInterval(function() {
            let now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById('days').innerText = Math.floor(distance / day)),
            (document.getElementById('hours').innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById('minutes').innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById('seconds').innerText = Math.floor(
                (distance % minute) / second
            ));
        }, 0);
})();

// counter
const counters = document.querySelectorAll('.value');
const speed = 300;

counters.forEach((counter) => {
    const animate = () => {
        const value = +counter.getAttribute('amount');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    };

    animate();
});