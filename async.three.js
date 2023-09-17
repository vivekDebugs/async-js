const getAsyncNum = () => {
  const randomNum = Math.random()
  return new Promise((resolve, reject) => {
    if (randomNum > 0.5) resolve(randomNum)
    else reject('Failed')
  })
}

getAsyncNum().then(console.log).catch(console.log)

const runGetAsyncNum = async () => {
  try {
    const num = await getAsyncNum()
    console.log(num)
  } catch (error) {
    console.log(error)
  }
}

runGetAsyncNum()

