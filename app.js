document.addEventListener('DOMContentLoaded', () => {
  // Máquina de escribir
  const mensajeEl = document.getElementById('message');
  const texto = `Mamá querida, cada día agradezco tu voz que ilumina mis mañanas y tu abrazo que calma mis miedos. Aunque a veces me cueste llamarte y mis palabras no sean suficientes, siento tu apoyo incondicional en cada paso que doy. Eres esa mujer valiente que nunca se rinde, ejemplo de fortaleza y ternura al mismo tiempo. 
  
  Gracias por cada sacrificio que aveces no sé reconocer y por enseñarme con tu ejemplo a creer en mí mismo. Hoy celebro tu vida, tus consejos llenos de sabiduría y tus risas que llenan la casa de alegría. 
  
  Eres mi refugio cuando el mundo pesa y mi impulso cuando siento que no puedo avanzar. Gracias por ser mi guía, mi amiga y mi héroe sin capa y aveces hasta por consentirme de más.
  
  Gracias por todo, Zule.❤️`;
  let i = 0;
  function escribe() {
    if (i < texto.length) {
      const char = texto.charAt(i);
      mensajeEl.innerHTML += (char === '\n') ? '<br>' : char;
      i++;
      setTimeout(escribe, 45);
    }
  }
  escribe();

  // Creación de pétalos
  setInterval(creaPetalo, 300);
  function creaPetalo() {
    const petalo = document.createElement('div');
    petalo.className = 'petal';
    petalo.style.left = Math.random() * window.innerWidth + 'px';
    const dur = Math.random() * 5 + 5; 
    petalo.style.animationDuration = `${dur}s`;
    document.body.appendChild(petalo);
    setTimeout(() => petalo.remove(), dur * 1000);
  }
});
