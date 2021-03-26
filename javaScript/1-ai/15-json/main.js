const obj = {
    name:"Nurkadyr",
    surname:"Urmatbekov",
    stack:["Python","JavaScript","React","Bootstrap"]
}

const json = JSON.stringify(obj)
console.log(json)

console.log(JSON.parse(json))


// const json = "{'name':'Nurkadyr','surname':'Urmatbekov','stack':['Python','Ja']}"