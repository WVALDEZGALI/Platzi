        // 1 es piedra, 2 es papel, 3 es tijera
        /*
        function aleatorio(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min)
        }
        let jugador = prompt("Elije 1 para piedra, 2 para papel o 3 para tijera")
        let pc = aleatorio(1 , 3)
        if(jugador == 1) {
            alert("Haz elegido piedra 🥌")
        } else if(jugador == 2) {
            alert("Haz elegido papel 📋")
        } else if(jugador == 3) {
            alert("Haz elegido tijera ✂") 
        } else{
            alert("Opcion incorrecta. Elije 1 para piedra, 2 para papel o 3 para tijera")
            exit
        }

        if(pc == 1) {
            alert("El pc ha elegido piedra 🥌")
        } else if(pc == 2) {
            alert("El pc ha elegido papel 📋")
        } else if(pc == 3) {
            alert("El pc ha elegido tijera ✂") 
        }

        if (jugador == pc) {
            alert("Empate")
        } else if (jugador == 1 && pc == 3) {
            alert("Ganaste")
        } else if (jugador == 2 && pc == 1) {
            alert("Ganaste")
        } else if (jugador == 3 && pc == 2) {
            alert("Ganaste") 
        } else {
            alert("Perdiste")
        }*/

        // 1 es piedra, 2 es papel, 3 es tijera
        function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
        }

        // Opciones disponibles
        const opciones = ["", "Piedra 🥌", "Papel 📋", "Tijera ✂"];

        let marcadorjugador = 0
        let marcadorpc = 0
        let empates = 0

        while (marcadorjugador < 3 && marcadorpc < 3) {

            // Pedir jugada al jugador
            let jugador = parseInt(prompt("Elige: 1 para Piedra, 2 para Papel o 3 para Tijera"));
            let pc = aleatorio(1, 3);

            // Validar entrada
            if (![1, 2, 3].includes(jugador)) {
            alert("Opción incorrecta ❌. Debes elegir 1, 2 o 3.");
            } else {
            alert("Elegiste: " + opciones[jugador]);
            alert("La PC eligió: " + opciones[pc]);

            // Determinar resultado
            if (jugador === pc) {
                alert("Empate 🤝");
                empates = empates + 1
            } else if (
                (jugador === 1 && pc === 3) ||
                (jugador === 2 && pc === 1) ||
                (jugador === 3 && pc === 2)
            ) {
                alert("¡Ganaste! 🎉");
                marcadorjugador++
            } else {
                alert("Perdiste 😢");
                marcadorpc ++
            }
            alert ("Marcador, jugador: " + marcadorjugador + " , PC: " + marcadorpc + " , empates: " + empates);
            }
        }
        alert("Marcador final, Jugador: " + marcadorjugador + " PC: " + marcadorpc + " , empates: " + empates);
        