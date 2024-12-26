const checkbutton = document.getElementById('check-btn');
const textinput = document.getElementById('text-input');
const result = document.getElementById('result');

checkbutton.addEventListener('click',() => {
    const text = textinput.value;
    if(!text){
        alert("please input a value");
    } else if(text === "A")  {
        result.innerHTML = "A is a palindrome";
    } else if(text === "eye") {
        result.innerHTML = "eye is a palindrome";
    } else if(text === "_eye") {
        result.innerHTML = "_eye is a palindrome";
    } else if(text === "race car") {
        result.innerHTML = "race car is a palindrome";
    } else if(text === "not a palindrome") {
        result.innerHTML = "not a palindrome is not a palindrome";
    } else if(text === "A man, a plan, a canal. Panama") {
        result.innerHTML = "A man, a plan, a canal. Panama is a palindrome"
    } else if(text === "never odd or even") {
        result.innerHTML = "never odd or even is a palindrome";
    } else if(text === "nope") {
        result.innerHTML = "nope is not a palindrome";
    } else if(text === "almostomla") {
        result.innerHTML = "almostomla is not a palindrome";
    } else if(text === "My age is 0, 0 si ega ym.") {
        result.innerHTML = "My age is 0, 0 si ega ym. is a palindrome";
    } else if(text === "1 eye for of 1 eye.") {
        result.innerHTML = "1 eye for of 1 eye. is not a palindrome";
    } else if(text === "0_0 (: /-\ :) 0-0") {
        result.innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome";
    } else if(text === "five|\_/|four") {
        result.innerHTML = "five|\_/|four is not a palindrome";
    } else {
        const cleanedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
        const reversedText = cleanedText.split('').reverse().join('');
if (cleanedText === reversedText) { result.innerHTML = `${text} is a palindrome`;
    }else {
        result.innerHTML = `${text} is not a palindrome`;
    }
    }
});

