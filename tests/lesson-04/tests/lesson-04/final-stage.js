function findPairsDivisibleBy17() {
    for (let x = 1; x <= 100; x++) {
        for (let y = x + 1; y <= 100; y++) {
            let total = x + y
            if (total % 17 === 0)
                console.log(`\n Tổng cộng = ${total} - cặp: ${x} và ${y} `)
        }
    }
}
findPairsDivisibleBy17()