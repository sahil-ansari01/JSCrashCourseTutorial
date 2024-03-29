const btn = document.querySelector('.btn');

btn.addEventListener('submit', (event) => {
    event.preventDefault();
})

const myForm = document.querySelector('#my-form');
const nameIn = document.querySelector('#name');
const emailIn = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();  
    if (nameIn.value === '' || emailIn.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(() =>  msg.remove(), 3000)
    } else {
        
        // store in localStorage 
        const userData = {
            name : nameIn.value,
            email : emailIn.value
        };

        const userData_serialized = JSON.stringify(userData);

        localStorage.setItem('userData', userData_serialized);
        // Clear fields
        nameIn.value = '';
        emailIn.value = '';
    }
}