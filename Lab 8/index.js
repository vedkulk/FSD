const a = 10;
const arr = [1,2,3,'a','b','c',true,{a:'abc'}];
console.log(arr[6]);
console.log(arr);
arr.push(100)
console.log(arr);
arr.pop();
arr.shift()
console.log(arr)
arr.unshift(1)
console.log(arr)
console.log(arr.join("*"));
console.log(arr.join("==="));
const arr2 = [1,2,3,4,5,6,7,8]
console.log(arr2.filter(item=>item%2==1))
console.log(arr2.map(item=>item*2))
const student = {
    name: "Ved",
    year: "TY",
    course: "BTech Computer Science and Engineering",
    hobbies:['Coding', "Video Games", "Cricket"],
    coding: function(){
        const a = console.log('Hello World')
        return a
    }
}
console.log(student)
student.coding()
function details(name, age){
    this.name=name;
    this.age=age;
}
const person1 = new details("Ved", 20)
console.log(person1)
console.log(arr2.slice(1,5))
arr2.splice(1,0,3,4)
console.log(arr2)
arr2.splice(1,2)
console.log(arr2)
const str = "HeLLo WoRLd"
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.charAt(2))
console.log(str.charCodeAt(4))
const str2 = '    mango   kiwi, apple, cashew'
console.log(str2.trim())
console.log(str2.replace('apple', 'banana'))
const a1 = '123'
const test1 = a1.padStart(5,'0')
const test2 =a1.padEnd(5,'0')
console.log(test1)
console.log(test2)
