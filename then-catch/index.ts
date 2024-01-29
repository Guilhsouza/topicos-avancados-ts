function execute() {
    return new Promise((resolve) => {
        console.log('promise executando...')
        setTimeout(() => {
            console.log('resolvendo promise')
            resolve('resultado')
        }, 2000);
    })
}

execute().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})
