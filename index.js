

let prevHTML=document.querySelectorAll('.rectangle-3-copy-16-holder')[0].innerHTML
btn=document.addEventListener('mouseenter',()=>{

document.querySelectorAll('.rectangle-3-copy-16-holder')[0].innerHTML=prevHTML
})


btn=document.addEventListener('mouseout',()=>{
    document.querySelectorAll('.rectangle-3-copy-16-holder')[0].innerHTML='<h2>Grab the Offer</h2>'
    // console.log("hello")
})

