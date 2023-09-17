const getAsyncNum = async () => {
  const randomNum = Math.random()
  if (randomNum > 0.5) return randomNum
  else throw 'Failed'
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
