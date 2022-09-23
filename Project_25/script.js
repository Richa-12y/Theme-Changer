const toggleButton=document.getElementById('toggle-button')

toggleButton.addEventListener('input',()=>{
     // console.log(toggleButton.checked)
     let isChecked=toggleButton.checked

     if(isChecked){
          document.querySelector('body').style.background='#242B2E';
     }
     else{
          document.querySelector('body').style.background='white';

     }

})

