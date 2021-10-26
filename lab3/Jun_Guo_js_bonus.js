function diceRolling(instruction) {
    const instructArr = instruction.split("d")
    if (! checkInstruction(instructArr)) {
        console.log("invalid input: " + instruction)
        return
    }
    const count = instructArr[0]
    const diceDimensions = instructArr[1]
    
    let ans = 0
    for (let i = 0; i < count; i++) {
        const score = Math.floor(Math.random() * diceDimensions) + 1
        ans += score;
    }
    console.log(ans)
    return ans
}

function checkInstruction(arr) {
    return ! (! arr || arr.length != 2 || arr[0] < 1 || arr[0] > 100 || arr[1] < 2 || arr[2] > 100)
}

function handleMultipleLine(input) {
    const lines = input.split("/n")
    for (let line of lines) {
        diceRolling(line)
    }
}


handleMultipleLine("10d6/n3d20/n99d33")