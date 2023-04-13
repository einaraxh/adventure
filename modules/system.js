export function inner(str, div) {
    document.getElementById(div).innerHTML = str
    //document.getElementsByClassName(div).innerHTML = str
}

export function mod(n, m) {
    return ((n % m) + m) % m;
}