const giveAlert = () => {
    alert('hello Alert')
}
const colorChange = () =>{
    const colors=['Red', 'Blue', 'Green', 'Cyan','Orange', 'Purple', 'Beige', 'Black', 'Violet', 'Purple', 'Brown']
    const index = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor=colors[index];
}
//const epilepsy = setInterval(colorChange, 100)
const confirmBox = () => {
    test=confirm("Confirm method ")
    if(test===true){
        console.log('True val')
    }
    else{
        console.log('Untrue')
    }
}
const promptBox = ()=>{
    let check = prompt("Are you human! ")
    if(check==='Yes'||check==='yes'){
        alert('Welcome to the site')
    }
    else{
        alert('Access denied. ')
    }
}
document.write('<p class="name">Hello Harsh </p>')
const loops = ()=>{
    for(let i=0;i<11;i++){
        console.log(i)
    }
    let i = 10
    while(i!=0){
        console.log(i)
        i--;
    }
}
const switchCase = () =>{
    let Input=document.querySelector('.subject');
    let userInput= Input.value
    console.log(userInput)
    switch(userInput){
        case 'HTML':
            alert('You chose HTML')
            break;
        case 'JavaScript':
            alert('You chose JavaScript')
            break;
        case 'jQuery':
            alert('You chose jQuery')
            break;
        default:
            alert('Subject not available')
            break;
    }
}
