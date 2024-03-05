function submitQuiz() {
    var answers = {
      q1: document.querySelector('input[name="q1"]:checked').value,
      q2: document.querySelector('input[name="q2"]:checked').value,
      q3: document.querySelector('input[name="q3"]:checked').value
    };
    
    var score = 0;
    if (answers.q1 === 'Paris') score++;
    if (answers.q2 === 'Mars') score++;
    if (answers.q3 === 'Elephant') score++;
    
    document.getElementById('score').innerText = score;
    document.getElementById('score-popup').style.display = 'block';
  }

  function closeScorePopup() {
    document.getElementById('score-popup').style.display = 'none';
  }