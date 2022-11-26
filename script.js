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
    const password = document.querySelector('#password')
    const confirm = document.querySelector('#confirm')

    function check(other){
        if(this.value == ""){
            password.style.borderColor = "var(--error)"
            confirm.style.borderColor = "var(--error)"
            this.setCustomValidity("Must enter a password");
            this.reportValidity();
        } else if(this.value !== other.value){
            console.log(this.value, other.value)
            password.style.borderColor = "var(--error)"
            confirm.style.borderColor = "var(--error)"
            this.setCustomValidity("Passwords do not match!");
            this.reportValidity();
        } else if (this.value == other.value) {
            console.log(this.value, other.value)
            this.setCustomValidity("");
            other.setCustomValidity("");
            this.reportValidity();
            password.style.borderColor = "var(--valid)"
            confirm.style.borderColor = "var(--valid)"
        }
    }

    // on keyup, check not blank and if match make border green else red. 
    password.addEventListener('keyup', check.bind(password, confirm))
    confirm.addEventListener('keyup', check.bind(confirm, password))

    // check if user over 18.
    // get dob input
    let dob = document.querySelector("#dob")

    // Create date thats 18 years old.
    date = new Date()
    let thisMonth = (date.getMonth().length != 1) ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    let thisDay = (date.getUTCDate().length != 1) ? date.getUTCDate() : `0${date.getUTCDate()}` ;
    let compareYear = date.getFullYear() - 18
    let youngest = `${compareYear}-${thisMonth}-${thisDay}`
    let formValidate = `${thisDay}-${thisMonth}-${compareYear}`
    dob.setAttribute("min", formValidate)

    // if input is younger, make border red else green
    dob.addEventListener('change', () => {
        if(dob.value >= youngest){
            dob.style.borderColor = "var(--error)"
            dob.setCustomValidity('Must be over 18')
            dob.reportValidity(); 
        }
        else{
            dob.style.borderColor = "var(--valid)"  
            dob.setCustomValidity('')
            dob.reportValidity(); 
        }
    })

    // Alert on succesful form submition 
    form = document.querySelector('form')
    form.addEventListener('submit', () => {
        if(!form.checkValidity()){
            form.preventDefault()
        } else {
            alert("Sign up complete.")
            form.preventDefault()
        }
       
    })
})