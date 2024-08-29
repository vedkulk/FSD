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