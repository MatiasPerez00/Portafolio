const glow = document.getElementById('glow');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    glow.style.left = `${x - 200}px`; // Eliminar la mitad del tamaño para centrar el círculo
    glow.style.top = `${y - 200}px`;
});