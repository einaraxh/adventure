export function inner(str) {
    document.getElementById("maindiv").innerHTML = str
}

export function mod(n, m) {
    return ((n % m) + m) % m;
}