const add = (a,b) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(a + b)
    }, 2000)
  })
}

const doWork = async () => {
  return await add(1,99);
  // throw new Error('Something went wrong')
  // return 'name'
}

doWork().then((result) =>{
  console.log('result', result)
}).catch((e) =>{
  console.log(e)
})