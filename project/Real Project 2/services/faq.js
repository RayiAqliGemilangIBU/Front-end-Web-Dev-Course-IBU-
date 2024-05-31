
      fetch('./data/answers.json')
          .then(response => response.json())
          .then(data => {
              const answers = data.answers;
  
              const accordionBtns = document.querySelectorAll('.accordion-btn');
              accordionBtns.forEach((btn, index) => {
                  btn.addEventListener('click', () => {
                      const panel = btn.nextElementSibling;
                      btn.classList.toggle('active');
                      panel.classList.toggle('show');
  
                      // Set the answer content
                      const answerContent = panel.querySelector('p');
                      answerContent.textContent = answers[index].answer;
                  });
              });
          })
          .catch(error => console.error('Error loading FAQ data:', error));
;
  