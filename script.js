document.addEventListener('DOMContentLoaded', ()=>{

    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let number = document.querySelector('#number')

    let inputs = [name, email, number]

    inputs.forEach(element => {
       element.addEventListener('blur', () =>{
            element.checkValidity() ? element.style.borderColor = "green" : element.style.borderColor = "red"
       })
    });

    let password = document.querySelector('#password')
    let confirm = document.querySelector('#confirm')

    let pass = [password, confirm]
    pass.forEach(element => {
        element.addEventListener('keyup',()=>{
            if(element.value !== "" && password.value === confirm.value){
                password.style.borderColor = "green"
                confirm.style.borderColor = "green"
            } 
            else{
                password.style.borderColor = "red"
                confirm.style.borderColor = "red"
            }
        })
    })

})