var circlek = document.querySelectorAll('.one');

circlek.forEach(element, (element)=>{
    element.addEventListener('click', ()=>{
        element.classList.add('check-circle');
    });
})