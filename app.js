document.addEventListener("DOMContentLoaded", () => {

  // QUESTION SWITCHING
  window.nextQuestion = function (num) {
    document.querySelectorAll('.question-box').forEach(box =>
      box.classList.remove('active')
    );
    document.getElementById(`q${num}`).classList.add('active');
  };

  // ELEMENTS
  const yesbutton = document.getElementById('yesbtn');
  const nobutton = document.getElementById('nobtn');
  const yesdialog = document.getElementById('yesdialog');
  const closebutton = document.getElementById('closebtn');

  // STORE ORIGINAL NO BUTTON POSITION
  const originalStyles = {
    position: nobutton.style.position,
    top: nobutton.style.top,
    left: nobutton.style.left
  };

  // YES CLICK → RESET NO BUTTON + OPEN DIALOG
  yesbutton.addEventListener('click', () => {
    nobutton.style.position = originalStyles.position;
    nobutton.style.top = originalStyles.top;
    nobutton.style.left = originalStyles.left;

    yesdialog.showModal();
  });

  // MOVING NO BUTTON
  nobutton.addEventListener("click", () => {
    const x = Math.random() * 200;
    const y = Math.random() * 200;

    nobutton.style.position = "absolute";
    nobutton.style.top = x + "px";
    nobutton.style.left = y + "px";
  });

  // CLOSE DIALOG
  closebutton.addEventListener('click', () => yesdialog.close());

  // FULLSCREEN THEN REDIRECT
  document.getElementById('fullscreen').addEventListener('click', (e) => {
    e.preventDefault();
    document.documentElement.requestFullscreen().then(() => {
      window.location.href = "img.html";
    });
  });

});
