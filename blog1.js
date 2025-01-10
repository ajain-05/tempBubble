const button = document.querySelector('button')
const textArea = document.getElementById('Notes')
const parent = document.querySelector('.blog1')

button.addEventListener('click',()=>{

    const box = document.createElement('div')
    box.className = 'written'

    const heading = document.createElement('h2')
    heading.className = "writtenH2"
    heading.textContent = "Your Note"
    box.appendChild(heading)

    const deleted = document.createElement('p')
    deleted.id = 'delete'
    deleted.innerHTML = '🗑'
    box.appendChild(deleted)
    
    const edited = document.createElement('p')
    edited.id = 'edit'
    edited.innerHTML = '📝'
    box.appendChild(edited)

    const para = document.createElement('p')
    para.id = 'DisplayNote'

    if(textArea.value===""){
        return;
    }

    let Note = textArea.value
    para.textContent = Note;
    textArea.value = ""
    box.appendChild(para)


    parent.appendChild(box)


    deleted.addEventListener("click",()=>{
        box.remove();
    })

    edited.addEventListener("click",()=>{
        const value = para.textContent
        textArea.value = value;
        box.remove()
    })

})






