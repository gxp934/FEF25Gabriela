document.addEventListener('DOMContentLoaded', () => {
    // Cambiar el fondo del header al hacer clic
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        header.style.backgroundColor = header.style.backgroundColor === 'lightblue' ? 'lightgray' : 'lightblue';
    });

    // Cambiar el tamaño del nombre del personaje al pasar el mouse
    const characterNames = document.querySelectorAll('.character-card h3');
    characterNames.forEach(name => {
        name.addEventListener('mouseover', () => {
            name.style.fontSize = '30px'; // style change
            name.style.color = 'darkorange'; // style change
        });
        name.addEventListener('mouseout', () => {
            name.style.fontSize = '24px'; // reset style
            name.style.color = '#000'; // reset style
        });
    });

    // Cambiar contenido de un párrafo en la sección de aventura
    const adventureSection = document.querySelector('#adventure p');
    const btn = document.createElement('button');
    btn.innerHTML = 'Reveal Secret!';
    btn.style.marginTop = '10px';
    btn.style.padding = '8px 12px';
    btn.style.cursor = 'pointer';
    adventureSection.after(btn);

    btn.addEventListener('click', () => {
        adventureSection.innerHTML += ' 🌟 A hidden star map was discovered behind the crystals! 🌟';
    });

    // Agregar clase a los cards de personajes al hacer clic
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('highlight');
        });
    });

    // Cambiar color de fondo del footer al pasar el mouse
    const footer = document.querySelector('footer');
    footer.addEventListener('mouseover', () => {
        footer.style.backgroundColor = 'orange';
    });
    footer.addEventListener('mouseout', () => {
        footer.style.backgroundColor = 'lightgray';
    });
});
