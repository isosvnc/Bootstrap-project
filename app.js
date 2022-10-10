const bars = document.querySelector('.bars')
const menu = document.querySelector('.menu')
const exitBtn = document.querySelector('.exit-logo')
const sliderBtn = document.querySelectorAll('.buttons span')
const row = document.querySelectorAll('.jsRow')

let slider;


bars.addEventListener('click',()=>{
    menu.classList.add('active')
})

exitBtn.addEventListener('click',()=>{
    menu.classList.remove('active')
})


sliderBtn.forEach((element,idx) => {
    element.addEventListener('click',()=>{
        deleteActive()
        element.classList.add('active')
        row.forEach((row,index) => {
            if(idx==index){
                row.classList.add('active')
            }else{
                row.classList.remove('active')
            }
            
        });
        
    })

    
});


function deleteActive(){
    sliderBtn.forEach(element => element.classList.remove('active'))
}


