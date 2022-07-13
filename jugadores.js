let jugadores = [
    {
        nombre: 'Lionel Messi',
        pais: 'Argentina',
        camiseta: 10,
        posicion: 'Barcelona',
        rating: 92,
        imagen: 'fotos/Lionel Messi.png'
    },
    {
        nombre: 'Neymar',
        pais: 'Brazil', 
        camiseta: 10, 
        posicion: 'LW', 
        rating: 92, 
        imagen: 'fotos/Neymar.png'
    }, 
    {nombre: 'Luis Suárez', pais: 'Uruguay', camiseta: 9, posicion: 'LS', rating: 92, imagen: 'fotos/Luis Surez.png'}, 
    {nombre: 'Gonzalo Higuaín', pais: 'Argentina', camiseta: 9, posicion: 'Sub', rating: 89, imagen: 'fotos/Gonzalo Higuan.png'}, 
    {nombre: 'Thiago Silva', pais: 'Brazil', camiseta: 14, posicion: 'Sub', rating: 89, imagen: 'fotos/Thiago Silva.png'}, 
    {nombre: 'Sergio Agüero', pais: 'Argentina', camiseta: 7, posicion: 'Sub', rating: 89, imagen: 'fotos/Sergio Agero.png'}, 
    {nombre: 'Diego Godín', pais: 'Uruguay', camiseta: 3, posicion: 'LCB', rating: 88, imagen: 'fotos/Diego Godn.png'}, 
    {nombre: 'Paulo Dybala', pais: 'Argentina', camiseta: 21, posicion: 'Sub', rating: 86, imagen: 'fotos/Paulo Dybala.png'}, 
    {nombre: 'Coutinho', pais: 'Brazil', camiseta: 11, posicion: 'RW', rating: 86, imagen: 'fotos/Coutinho.png'}, 
    {nombre: 'Ángel Di María', pais: 'Argentina', camiseta: 11, posicion: 'LW', rating: 86, imagen: 'fotos/ngel Di Mara.png'}, 
    {nombre: 'Edinson Cavani', pais: 'Uruguay', camiseta: 21, posicion: 'RS', rating: 86, imagen: 'fotos/Edinson Cavani.png'}, 
    {nombre: 'Marcelo', pais: 'Brazil', camiseta: 16, posicion: 'LB', rating: 86, imagen: 'fotos/Marcelo.png'}, 
    {nombre: 'Miranda', pais: 'Brazil', camiseta: 3, posicion: 'RCB', rating: 86, imagen: 'fotos/Miranda.png'}, 
    {nombre: 'Willian', pais: 'Brazil', camiseta: 19, posicion: 'Sub', rating: 85, imagen: 'fotos/Willian.png'}, 
    {nombre: 'Filipe Luís', pais: 'Brazil', camiseta: 6, posicion: 'Sub', rating: 85, imagen: 'fotos/Filipe Lus.png'}, 
    {nombre: 'Nicolás Otamendi', pais: 'Argentina', camiseta: 17, posicion: 'RCB', rating: 84, imagen: 'fotos/Nicols Otamendi.png'}, 
    {nombre: 'Douglas Costa', pais: 'Brazil', camiseta: 7, posicion: 'Sub', rating: 84, imagen: 'fotos/Douglas Costa.png'}, 
    {nombre: 'Éver Banega', pais: 'Argentina', camiseta: 19, posicion: 'CAM', rating: 84, imagen: 'fotos/ver Banega.png'}, 
    {nombre: 'Dani Alves', pais: 'Brazil', camiseta: 2, posicion: 'RB', rating: 84, imagen: 'fotos/Dani Alves.png'}, 
    {nombre: 'Javier Mascherano', pais: 'Argentina', camiseta: 14, posicion: 'LCM', rating: 84, imagen: 'fotos/Javier Mascherano.png'}, 
    {nombre: 'José María Giménez', pais: 'Uruguay', camiseta: 2, posicion: 'RCB', rating: 83, imagen: 'fotos/Jos Mara Gimnez.png'}, 
    {nombre: 'Marquinhos', pais: 'Brazil', camiseta: 13, posicion: 'LCB', rating: 83, imagen: 'fotos/Marquinhos.png'}, 
    {nombre: 'Roberto Firmino', pais: 'Brazil', camiseta: 21, posicion: 'ST', rating: 83, imagen: 'fotos/Roberto Firmino.png'}, 
    {nombre: 'Marcos Rojo', pais: 'Argentina', camiseta: 16, posicion: 'LCB', rating: 83, imagen: 'fotos/Marcos Rojo.png'}, 
    {nombre: 'Casemiro', pais: 'Brazil', camiseta: 5, posicion: 'CDM', rating: 83, imagen: 'fotos/Casemiro.png'},
    {nombre: 'Oscar', pais: 'Brazil', camiseta: 20, posicion: 'Sub', rating: 83, imagen: 'fotos/Oscar.png'},
    {nombre: 'Mateo Musacchio', pais: 'Argentina', camiseta: 15, posicion: 'Sub', rating: 83, imagen: 'fotos/Mateo Musacchio.png'},
    {nombre: 'Ederson', pais: 'Brazil', camiseta: 23, posicion: 'Sub', rating: 82, imagen: 'fotos/Ederson.png'},
    {nombre: 'Taison', pais: 'Brazil', camiseta: 22, posicion: 'Sub', rating: 82, imagen: 'fotos/Taison.png'},
    {nombre: 'Giuliano', pais: 'Brazil', camiseta: 18, posicion: 'Sub', rating: 82, imagen: 'fotos/Giuliano.png'},
    {nombre: 'Fernando Néstor Muslera', pais: 'Uruguay', camiseta: 1, posicion: 'GK', rating: 82, imagen: 'fotos/Fernando Nstor Muslera.png'},
    {nombre: 'Diego Alves', pais: 'Brazil', camiseta: 12, posicion: 'Sub', rating: 82, imagen: 'fotos/Diego Alves.png'},
    {nombre: 'Lucas Biglia', pais: 'Argentina', camiseta: 6, posicion: 'RCM', rating: 82, imagen: 'fotos/Lucas Biglia.png'},
    {nombre: 'Fernandinho', pais: 'Brazil', camiseta: 17, posicion: 'Sub', rating: 82,  imagen: 'fotos/Fernandinho.png'}, 
    {nombre: 'Paulinho', pais: 'Brazil', camiseta: 15, posicion: 'RCM', rating: 81, imagen: 'fotos/Paulinho.png'}, 
    {nombre: 'Renato Augusto', pais: 'Brazil', camiseta: 8, posicion: 'LCM', rating: 81, imagen: 'fotos/Renato Augusto.png'},
];

// Interactuamos con el DOM
let miLista = document.getElementById("miListaDeJugadores");

// Declaramos el bucle



for (let jugador of jugadores){
    // Agregamos de manera dinámica html en js
    miLista.innerHTML += `
            <div class="div-padre">
            <h3>${jugador.nombre}</h3>
            <p>${jugador.pais}</p>
            <p>${jugador.camiseta}</p>
            <p>${jugador.posicion}</p>
            <p>${jugador.rating}</p>
            <div class="imagen"><img src="${jugador.imagen}"></div>
            </div>
    `
}