// const student ={
//     name:'mitu',
//     age:20
// }


// console.log(student);
// const datastringify = JSON.stringify(student)
// console.log(datastringify);
// console.log(JSON.parse(datastringify));





fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(datas => {
    console.log(datas)
    for (const data of datas){
        console.log(data.name);
        console.log(data.company.name);
        
    }
  })