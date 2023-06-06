let disable=true;
let result=0;
function onSelectOpinion(event,num){    
    result=0
    queries=document.querySelectorAll('.raiting_number-active');
    result=num
    for(let i=0;i<queries.length;i++){
        queries[i].className='raiting_number'
    }
    event.target.className='raiting_number-active'
    disable=false;  
    
}

function onSubmit(){
    if(!disable){       
        let content=document.getElementById('content')
        console.log('content',content );
        content.style.transition='rotate 1.5s ease-in-out'
        content.style.rotate='y 180deg'   
        firstPage=document.getElementById('first_page') 
        secondPage=document.getElementById('second_page') 
        firstPage.style.transitionDelay = "1s"
        secondPage.style.transitionDelay = "1s"
        resultSecond=document.getElementById('result_second')
        resultSecond.innerText=result;   
        setTimeout(()=>{
            firstPage.style.display='none';
            secondPage.style.display='block';
        
        }, 750); 
         
    }
}
