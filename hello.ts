async function futureAdd(a: number, b: number) {
    return new Promise((resolve) => {
        console.log(`Promise: will add ${a} + ${b}`)
        setTimeout(() => {
            resolve(a + b)
        }, 3000)
    })
}

(async () => {
        const result = await futureAdd(1, 2)
        console.log(`result: ${result}`)
    }
)()