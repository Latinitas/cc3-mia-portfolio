console.log('hello')
buttons.forEach(button => button.addEventListener('click', togglebutton));

function toggleButton(event) {
    const text=event.target.parentNode.children[1]
    if  (text.style.display === 'none' || !text.style.display) {
        console.log('here now')
        // if there is some string
    text.style.display = "block";
   } else {
    text.style.display = "none";
   }
}