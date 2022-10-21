document.addEventListener('DOMContentLoaded', () => {
    // get items from form
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let number = document.querySelector('#number')
    
    // add to a list
    let inputs = [name, email, number]

    // for each one, add a checker and change background color
    inputs.forEach(element => {
       element.addEventListener('blur', () => {
            // change color
            if(element.checkValidity()){
                element.style.borderColor = "var(--valid)"; 
            }
            // change color and return appropriate error message.
            else{
                element.style.borderColor = "var(--error)";
                switch(element.name){
                    case "name":
                        element.setCustomValidity("Please enter a name")
                        break
                    case "email":
                        element.setCustomValidity("Please enter a valid email address")
                        break
                    case "number":
                        element.setCustomValidity("Please enter a valid UK mobile number")
                        break
                }   
                element.reportValidity();  
            }
       })
    });

    // check for change and remove validity nmessage
    inputs.forEach(element => {
        element.addEventListener('change', () => {
            element.setCustomValidity('')
            element.reportValidity(); 
        })
    })

    // get both password fields
    let password = document.querySelector('#password')
    let confirm = document.querySelector('#confirm')

    // add to list
    let pass = [password, confirm]

    // on keyup, check not blank and if match make border green else red. 
    pass.forEach(element => {
        element.addEventListener('keyup',()=>{
            if(element.value !== "" && password.value == confirm.value){
                password.style.borderColor = "var(--valid)"
                confirm.style.borderColor = "var(--valid)"
            } 
            else{
                password.style.borderColor = "var(--error)"
                confirm.style.borderColor = "var(--error)"
                element.setCustomValidity('Passwords do not match')
                element.reportValidity(); 
            }
        })
    })

    // check for change and remove validity nmessage
    pass.forEach(element => {
        element.addEventListener('change',()=>{
            element.setCustomValidity('')
            element.reportValidity(); 
        })
    })

    // check if user over 18.
    // get dob input
    let dob = document.querySelector("#dob")

    // Create date thats 18 years old.
    date = new Date()
    let thisMonth = (date.getMonth().length != 1) ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    let thisDay = (date.getUTCDate().length != 1) ? date.getUTCDate() : `0${date.getUTCDate()}` ;
    let compareYear = date.getFullYear() - 18
    let youngest = `${compareYear}-${thisMonth}-${thisDay}`
    

    // if input is younger, make border red else green
    dob.addEventListener('change', ()=>{
        dob.value >= youngest ? dob.style.borderColor = "var(--error)" : dob.style.borderColor = "var(--valid)"
    })

    // Alert on succesful form submition 
    form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
       alert("Sign up complete.")
    })
})