let id_display = document.querySelector('.advice-id');
let advice_display = document.querySelector('.advice-text');
let advice_button = document.querySelector('button');

async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    json = await res.json(); 
    
    id_display.innerText = json.slip.id;
    advice_display.innerText = `${json.slip.advice}`
}

// Get advice on button click
advice_button.addEventListener('click', e => {
    getAdvice();
});

// Get advice on page load
getAdvice();