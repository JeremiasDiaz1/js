
let contador = 0
let animal = ''

while ( animal != 'perro' ) {
    animal = prompt ('Adivina el animal')
    contador++
    if (contador == 3) {
        alert ('Perdiste')
    }

}