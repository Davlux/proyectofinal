
console.log("Hola Mundo")

window.addEventListener('load', () => {
    alert('Bienvenido a mi CV!');
  });

  const btnScrollUp = document.getElementById('btn-scroll-up');
  btnScrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  