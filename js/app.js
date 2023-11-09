let height = Number(prompt('enter your height'));
let weight = Number(prompt('enter your weight'));

let bmi = weight / ((height*0.3048)**2);

if(bmi < 18.5){
document.querySelector('h1').innerText = 'Underweight'
}else if(bmi >=18.5 && bmi <= 24.9){
    document.querySelector('h1').innerText = 'Normal weight'
}else if(bmi >= 25 && bmi <= 29.9){
    document.querySelector('h1').innerText = 'Overweight'
}else if(bmi >= 30){
    document.querySelector('b').innerText = 'jodi pat na komow tahula bow pabena'
}