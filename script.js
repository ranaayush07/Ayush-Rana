'Use Strict Mode'
/*setTimeout(()=>{
    alert('You are using javascript for it')
},4000)
*/
/*const xhr = new XMLHttpRequest()
xhr.responseType = 'JSON'
xhr.addEventListener('load', ()=>{
    console.log(xhr.responseURL)
})
xhr.open('GET', 'https://dummyjson.com/image/150')
xhr.send()*/

function makeHttpRequest(method,url){
    const xhr = new XMLHttpRequest()
    xhr.responseType = 'JSON'
    const promise = new Promise((resolve,reject) =>{
        xhr.addEventListener('load', () =>{
            resolve(xhr.response)
        })
    })
  


    xhr.open(method, url) 
    xhr.send()
    return promise
}
//makeHttpRequest('GET', 'https://dummyjson.com/posts', (data)=>{
//console.log(data)

//})


/*makeHttpRequest('GET', 'https://dummyjson.com/users').then((usersData)=>{
    return makeHttpRequest(`GET','https://dummyjson.com/posts/user/${usersData.user[0].id}`).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
})*/

 const promiseResolved = document.querySelector('.p-res')
 const promiseRejected = document.querySelector('.p-rej')

const myPromise = new Promise((resolve,reject)=>{
  promiseResolved.addEventListener('click',()=>{
    resolve('Promise Resolved')
  })
  promiseRejected.addEventListener('click',()=>{
    reject('Promise Rejected')
  })
})
setTimeout(()=>{
    console.log('Ayush Rana')
})
myPromise.then((data)=>{
    console.log(data)
    return 15;
}).then((data)=>{
    console.log(data)
    return 10
}).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('Finally')
})
/*fetch('https://dummyjson.com/products',{
    method: 'DELETE'
}).then((res)=> res.json()
).then((data)=>{
    console.log(data)
})*/
/*fetch('https://dummyjson.com/products/add',{
    method: 'POST',
    headers: { 'Content-Type' : 'application/json'},
    body: JSON.stringify({
        title: 'BMW Pencil',
        category: 'Stationary',
    })
}).then((res)=>res.Json).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
try{
     console.log(a)
} catch(err){
    console.dir(err)
} finally{
    console.log('Finally Block is executed in every case whether the err appears or not')
}
console.log('Ayush Rana')*/
const user = {
    name: 'Ayush',
    Age: 22,
    BloodGroup: 'AB+'
}
console.log(user.address?.city)
import { productData, ayushRanaDetails } from "./products.js"
console.log(productData)

console.log(ayushRanaDetails.name?.lastName)
import myFriends  from "./products.js"
console.log(myFriends)


const myUser  = {
    name: 'Ayush',
    age: 22,
    BloodGroup: 'AB+',
    getAgeYear: function(){
        return new Date().getFullYear() - myUser.age
    }
}
console.log(myUser.getAgeYear())

function createUser(firstName,lastName,age)  {
    const user = {

firstName,
lastName,
age,
    }



return user
}
console.log(createUser('Ayush','Rana',22))

function myDetails(firstName,lastName,age,bloodGroup) {

    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.bloodGroup = bloodGroup
  
}

const user1 = new myDetails('Ayush','Rana', 22,'AB+')
const user2 = new myDetails('Ankush','Rana', 20,'AB+')
console.log(user1)
console.log(user2)

class createUsers{
    #age
constructor (firstName,lastName,age){

 this.firstName = firstName,
 this.lastName = lastName,
 this.#age = age
}

#hi = 'Hiii'

static Name = 'Ayush Rana'
static{
    'Anksuh Rana'
}

getFullName(){
    return this.firstName + ' ' + this.lastName
}
getBirthYear(){
    return new Date().getFullYear() - this.age
}

}
console.dir(createUsers)
const user3 = new createUsers('Vivek','Rana',18,'B+')
console.log(createUsers)
console.log(user3.getBirthYear())
console.log(user3)

const any = {
    firstName: 'Ayush',
    '#age': '22',
    lastName: 'Rana',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const [firstName, lastName]= value.split(" ")
        this.firstName = firstName,
        this.lastName = lastName
     }

}
console.log(any.fullName) 
any.fullName = 'Ankush Rana'
console.log(any)

class student extends createUsers {
    constructor(firstName,lastName,age,standard){
        super(firstName,lastName,age)
        this.standard = standard
    }
}
const student1 = new student('Nishant','Kumar',21,'B+','Masters')
console.log(student1)

console.log('Ayush Rana');
