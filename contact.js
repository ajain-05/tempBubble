const form = document.querySelector('form')
const main = document.querySelector('main')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    

    if(!document.getElementById("Confirmation")){
    const div = document.createElement('div')
    div.id = "Confirmation"
    div.className = "intro"

    const para = document.createElement('p')
    para.id = "confirmP"
    para.textContent = "Thank you for reaching out to us! Your form has been submitted successfully. We appreciate your trust and will get back to you shortly."

    div.appendChild(para)
    
    main.appendChild(div)

    const name = document.getElementById("name")
    name.value = "";
    const email = document.getElementById("email")
    email.value = "";
    const query = document.getElementById("subject")
    query.value = "select"
    const message = document.getElementById("message")
    message.value= ""

    }
    else{
        return
    }

    


})