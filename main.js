let count = 0;
let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        value.textContent = count;

        if(count < 0) {
            value.style.color = "red";
        } else if(count > 0) {
            value.style.color = "green";
        } else {
            value.style.color = "black";
        }
    });
});