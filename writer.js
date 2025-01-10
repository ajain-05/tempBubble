const buttton = document.querySelector('.buttonsFormat')
const box = document.querySelector('#box')
buttton.addEventListener('click',(event)=>{

    const element = event.target.id;

    if(element==="bold"){
        document.execCommand("bold", false, null);
    }
    if(element==="italic"){
        document.execCommand("italic", false, null);
    }
    if(element==="underline"){
        document.execCommand("underline", false, null);
    }
    if(element==="insertOrderedList"){
        document.execCommand("insertOrderedList", false, null);
    }
    if(element==="insertUnorderedList"){
        document.execCommand("insertUnorderedList", false, null);
    }
    if (element === "h1") {
        document.execCommand("formatBlock", false, "h1");
    }
    if (element === "h2") {
        document.execCommand("formatBlock", false, "h2");
    }
    if (element === "h3") {
        document.execCommand("formatBlock", false, "h3");
    }
    if (element === "h4") {
        document.execCommand("formatBlock", false, "h4");
    }
    if (element === "h5") {
        document.execCommand("formatBlock", false, "h5");
    }
    if (element === "h6") {
        document.execCommand("formatBlock", false, "h6");
    }
    


})





