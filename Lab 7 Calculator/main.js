const giveAlert = () => {
    alert('hello Alert')
}

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
const calculate = () => {
    let n1 = document.querySelector('.num1').value;
    let n2 = document.querySelector('.num2').value;
    let operator = document.querySelector('.operators').value;
    let result;
    if(n2==0&&operator==='divide'){
        document.querySelector('.num1').value = '';
        document.querySelector('.num2').value = '';
        document.querySelector('.result').textContent="";
        alert('Cannot divide by 0');
    }
    else{
        switch (operator) {
        case "add":
            result = parseFloat(n1) + parseFloat(n2);
            break;
        case "subtract":
            result = parseFloat(n1) - parseFloat(n2);
            break;
        case "multiply":
            result = parseFloat(n1) * parseFloat(n2);
            break;
        case "divide":
            result = parseFloat(n1) / parseFloat(n2);
            break;
        default: 
            result = "Invalid operator";
            break;
        }
        document.querySelector('.result').textContent = result;
    }
  };