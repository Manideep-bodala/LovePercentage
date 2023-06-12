function calculateLoveScore() {
    const person1 = document.getElementById('person1').value;
    const person2 = document.getElementById('person2').value;
  
    // Calculate the love score based on some algorithm
    const loveScore = Math.floor(Math.random() * 101); // Generating a random score between 0 and 100
  
    // Display the love score
    const loveScoreElement = document.getElementById('love-score');
    loveScoreElement.textContent = `Love Score: ${loveScore}%`;
  
    // Display different love messages based on the love score range
    const loveMessageElement = document.getElementById('love-message');
    if (loveScore > 80) {
      loveMessageElement.textContent = "Congratulations! You have a strong love connection.True love is not about perfection or flawlessness. It's about embracing each other's imperfections and choosing to grow together, hand in hand, through the highs and lows of life";
    } else if (loveScore >= 40 && loveScore <= 70) {
      loveMessageElement.textContent = "You have a moderate love score. Cherish your bond and keep nurturing it.Love is not about how many days, months, or years you have been together. It's all about how much you love each other every single day.";
    } else {
      loveMessageElement.textContent = "Your love score is below expectations. Don't lose hope, love can blossom in unexpected ways.Love is like the wind. You can't see it, but you can feel it.";
    }
  }
  