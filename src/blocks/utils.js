function random() {
    return Math.floor(Math.random() * 3)

}
export function clearClasses(item, arrayClasses,temp = false) {
        if (temp) {
            item.forEach(it => {
                arrayClasses.forEach(cl => {
                    it.classList.remove(cl)
                })
            })
        } else {
            arrayClasses.forEach(classE => {
                item.classList.remove(classE)
            })
            return item.classList.add(arrayClasses[random()])
        }
}
