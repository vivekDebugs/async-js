const delay = () => {
  i = 0
  while (i < 1000000000) {
    i += 1
  }
}

const getDelayedAsyncNum = () => {
  const randomNum = Math.random()
  delay()
  return new Promise((resolve, reject) => {
    if (randomNum > 0.5) resolve(randomNum)
    else reject('Failed')
  })
}

console.log('⛳')
getDelayedAsyncNum()
  .then(num => console.log('❤', num))
  .catch(err => console.log('❤', err))
console.log('⛳')

const runGetDelayedAsyncNum = async () => {
  try {
    console.log('✨')
    const num = await getDelayedAsyncNum()
    console.log('✋', num)
    console.log('✨')
  } catch (error) {
    console.log('✋', error)
  }
}

console.log('⚽')
runGetDelayedAsyncNum()
console.log('⚽')
