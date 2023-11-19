function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        
        if (a % 2 == 0) {
            color.style.backgroundColor = 'lime'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'blue'
        }

    })
}
coloring()
