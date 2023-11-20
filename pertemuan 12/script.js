// const bt = myButton.textContent;

// myButton.addEventListener('click', function(){
//     alert('Hai broo')
// })

function myClick(){
    alert('Ini adalah alert');
    myButton.style.backgroundColor = 'red';
    myButton.style.fontSize = '100px';
}

function addNewText(){
    const text = document.createElement('h1');
    text.textContent = 'Hello';
    body.append(text);
}

function buttonHover(){
    myButtonHover.textContent = 'Hover';
}

function buttonLeave(){
    myButtonHover.textContent = 'Leave';
}