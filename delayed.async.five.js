function delayedPromise(delay) {
  return new Promise(function (resolve, reject) {
    console.log('Promise fired')
    setTimeout(function () {
      resolve('Resolved in ' + delay + 'ms')
    }, delay)
  })
}

const p1 = delayedPromise(5000)
const p2 = delayedPromise(3000)

console.log(p1,p2)

p2.then(console.log)

;(async () => {
	console.log('IIFE')
	const v1 = await p1
	console.log(v1)
})()

console.log("Program ended")

