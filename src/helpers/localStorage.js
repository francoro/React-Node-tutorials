export function getItem(key) {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        return null
    }
}

export function setItem(key, value) {
    let valueStringify = JSON.stringify(value)
    localStorage.setItem(key, valueStringify)
}

export function removeItem(key) {
    localStorage.removeItem(key)
}