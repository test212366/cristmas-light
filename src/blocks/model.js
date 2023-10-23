import {clearClasses} from "./utils";
import {$buttonStart} from "../index";

export let i,
    $lights,
    classes,
off = true
export function changeColor(time = 1000) {
    $lights = document.querySelectorAll('.item')
    classes = ['red', 'green', 'blue']
    i = setInterval(() => {
        $lights.forEach(item => {
            clearClasses(item, classes)
        })
    }, time)
}
export function onOffColor() {
    if(off) {
        const time = document.querySelector('.time')
        if(time.value) {
            changeColor(time.value)
            $buttonStart.textContent = 'off'
            off = false
            time.value = ''
        } else {
            changeColor()
            $buttonStart.textContent = 'off'
            off = false
        }

    } else {
        off = true
        clearInterval(i)
        $buttonStart.textContent = 'on'
        clearClasses($lights,classes, true)
    }
}