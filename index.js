document.addEventListener('DOMContentLoaded' , ()=>
{

const sliderRange= document.getElementById('slider')
const generatePassword = document.getElementById('Generate_button');
const Lower_case = document.getElementById('Lower_case')
const Upper_case = document.getElementById('Upper_case')
const Numbers =  document.getElementById('Numbers')
const specialChar =  document.getElementById('Special_char')
const mainInput = document.getElementById('main_input');

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

    let password = '';
    for (let i=0 ; i<sliderRange.value;i++)
    {
    if(Numbers.checked)
    {
        let Random_numbers =  Math.random()*10;
        console.log(Math.floor(Random_numbers))
        console.log(password+=Math.floor(Random_numbers))
    }
    
    if(Lower_case.checked)
    {
        let Random_numbers =  Math.random()*26;
        let Small= small_alpha.charAt(Random_numbers);
        console.log(password+=Small)
        
    }

    if(Upper_case.checked)
    {
        let Random_numbers =  Math.random()*26;
        let Big = big_alpha.charAt(Random_numbers);
        console.log(password+=Big)   

    }
    if(specialChar.checked)
    {
        let Random_numbers =  Math.random()*26;
        let Special = special_chars.charAt(Random_numbers)
        console.log(password+=Special)
        break;       
    }

    mainInput.innerText=password
  
    }  
    

}

})



