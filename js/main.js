const email = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const popup = document.getElementById('popup')
const popupText = document.getElementById('popup-text')
const submit = document.getElementById('submit')
const user = document.getElementById('message-user')
const message = document.getElementById('message')
const confirmText = document.getElementById('popup-confirm')
const cancelText = document.getElementById('popup-cancel')
const wrapper = document.getElementById('wrapper')


function f1() {
    popupText.innerText = "Please confirm account creation for " + email.value;
    popup.style.display = 'flex';
    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    
}

function f2(){
    form.style.display = 'none';
    user.innerText += email.value;
    message.style.display = 'flex';
    popup.style.display = 'none';
    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function f3(){
    popup.style.display = 'none';
    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

submit.addEventListener('click', (e) =>{
    if(email.value === '' || password.value === ''){
        console.log("console")
    }else{
        e.preventDefault()
        f1()
    }
    
})

confirmText.addEventListener('click', (e) => {
    e.preventDefault(f2())
    
})

cancelText.addEventListener('click', (e) =>{
    e.preventDefault()
    f3()
})