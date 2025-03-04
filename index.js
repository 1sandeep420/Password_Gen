document.addEventListener('DOMContentLoaded' , ()=>
{

const sliderRange= document.getElementById('slider')
const generatePassword = document.getElementById('Generate_button');
const Lower_case = document.getElementById('Lower_case')
const Upper_case = document.getElementById('Upper_case')
const Numbers =  document.getElementById('Numbers')
const specialChar =  document.getElementById('Special_char')
const mainInput = document.getElementById('main_input');
const Copy = document.getElementById('copy');
sliderValue = document.getElementById('slider_value');

sliderRange.addEventListener('input' ,() =>
{
    sliderValue.innerText = sliderRange.value
})


let small_alpha = 'abcdefghijklmnopqrstuvwxyz';
let big_alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let special_chars = '!@#$%^&*()-_=+[]{}|;:,.<>?/~';

generatePassword.addEventListener('click', generate)
function generate()
{

   let password = [];
   while(password.length<sliderRange.value)
    {
    if(Numbers.checked)
    {
        let Random_numbers = Math.floor( Math.random()*10);
        console.log(Math.floor(Random_numbers))
        password.push(Random_numbers)
    }
    
    if(Lower_case.checked)
    {
        let Random_numbers =  Math.random()*26;
        let Small= small_alpha.charAt(Random_numbers);
        password.push(Small)
        
    }

    if(Upper_case.checked)
    {
        let Random_numbers =  Math.random()*26;
        let Big = big_alpha.charAt(Random_numbers);
        password.push(Big)  

    }
    if(specialChar.checked)
    {
        let Random_numbers =  Math.random()*26;
        let Special = special_chars.charAt(Random_numbers)
        password.push(Special)
       
    }

    password.slice(0,sliderRange.value)

    mainInput.innerText=password.join('')
  
    }  
    

}


Copy.addEventListener('click', ()=>

{

    
    let text = mainInput.innerText; // Fixed text
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard: " + text);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });

    

})

})



