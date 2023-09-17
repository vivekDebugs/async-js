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

;(async () => {
	const v1 = await p1
	console.log("Function 1, Promise 1 ", v1)
	const v2 = await p2
	console.log("Function 1, Promise 2 ", v2)
})()

;(async () => {
	const v1 = await p1
	console.log("Function 2, Promise 1", v1)
})()

console.log("Program ended")

