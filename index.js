let string = "";
let buttons = document.querySelectorAll('.button');
// console.log(buttons);
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string='';
            document.querySelector('input').value = string;

        }
        else {
            console.log(e.target);
            string += e.target.innerHTML;//ye line kya kr rhi h
            document.querySelector('input').value = string;
        }
    })
})