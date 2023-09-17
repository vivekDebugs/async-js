const delayedMessage = msg => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg)
    }, 5000)
  })
}

const getDelayedMessage = async msg => {
  console.log(await delayedMessage(msg))
}

console.log('start')

getDelayedMessage('Foobar')

console.log('end')
