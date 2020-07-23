let p= new Promise((resolve,reject)=>{
    resolve("P complete")
})
let q= new Promise((resolve,reject)=>{
    resolve("Q complete")
})
let r= new Promise((resolve,reject)=>{
    resolve("R Failed")
})

const op=Promise.all([p,q,r]).then((x)=>{console.log(x)}).catch((x)=>(console.log(x)))

console.log(op)