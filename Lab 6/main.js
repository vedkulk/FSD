const giveAlert = () => {
    alert('hello')
}
const colorChange = () =>{
    const colors=['Red', 'Blue', 'Green', 'Cyan','Orange', 'Purple', 'Beige', 'Black', 'Violet', 'Purple', 'Brown']
    const index = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor=colors[index];
}
const epilepsy = setInterval(colorChange, 1000)
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
