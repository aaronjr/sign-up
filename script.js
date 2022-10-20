document.addEventListener('DOMContentLoaded', ()=>{
    // get items from form
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let number = document.querySelector('#number')
    
    // add to a list
    let inputs = [name, email, number]

    // for each one, add a checker and change background color
    inputs.forEach(element => {
       element.addEventListener('blur', () =>{
            element.checkValidity() ? element.style.borderColor = "green" : element.style.borderColor = "red"
       })
    });

    // get both password fields
    let password = document.querySelector('#password')
    let confirm = document.querySelector('#confirm')

    // add to list
    let pass = [password, confirm]

    // on keyup, check not blank and if match make border green else red. 
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

    // check if user over 18.
    // get dob input
    let dob = document.querySelector("#dob")

    // Create date thats 18 years old.
    date = new Date()
    let thisMonth = (date.getMonth().length != 1) ? `0${date.getMonth()}` : date.getMonth();
    thisDay = (date.getDay().length != 1) ? `0${date.getDay()}` : date.getDay()
    compareYear = date.getFullYear() - 18
    youngest = `${compareYear}-${thisMonth}-${thisDay}`

    // if input is younger, make border red else green
    dob.addEventListener('change', ()=>{
        dob.value > youngest ? dob.style.borderColor = "red" : dob.style.borderColor = "green"
    })
})