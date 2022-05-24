var backdrop = document.querySelector('.backdrop');
var modal=document.querySelector('.modal');
var modal_No=document.querySelector('.modal button');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');

// console.dir(backdrop.style['background-image']);
console.dir(selectPlanButtons);
for(var i =0; i<selectPlanButtons.length;i++)
{
    selectPlanButtons[i].addEventListener('click',function(){
        // modal.style.display='block';
        // backdrop.style.display='block';
        modal.classList.add('open');
        backdrop.classList.add('open');

    })
}
if(modal_No)
{
modal_No.addEventListener('click',closeModal);
}
backdrop.addEventListener('click',function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closeModal();
})

function closeModal(){
    // backdrop.style.display='none';
    // modal.style.display='none';
    if(modal){
        modal.classList.remove('open');  
    }
    backdrop.classList.remove('open');

}

toggleButton.addEventListener('click',function(){
    // mobileNav.style.display='block';
    // backdrop.style.display='block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})