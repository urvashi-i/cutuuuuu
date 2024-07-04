document.addEventListener('DOMContentLoaded', function() {
    // Get the "No" button element
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button')
    const gifImage = document.getElementsByClassName('vdo')

    // Add a click event listener
    noButton.addEventListener('click', function() {
      // Change the content of the "No" button
      if (noButton.innerHTML === 'No') {
        noButton.innerHTML = 'Are you sure?';
        noButton.style.fontSize = '15px';
        noButton.style.padding = '9px 19px'
        yesButton.style.padding = '14px 24px'
        yesButton.style.fontSize = '20px'
        gifImage.src = 'vdo2.mp4';
        gifImage.style.display = 'block';
        
      } 
      else if(noButton.innerHTML === 'Are you sure?') {
        noButton.innerHTML = 'Really sure?'; 
        noButton.style.fontSize = '14px';
        noButton.style.padding = '8px 18px'
        yesButton.style.padding = '18px 28px'
        yesButton.style.fontSize = '24px'
      }
      else if(noButton.innerHTML === 'Really sure?') {
        noButton.innerHTML = 'Thnik again'; 
        noButton.style.fontSize = '13px';
        noButton.style.padding = '7px 17px'
        yesButton.style.padding = '22px 32px'
        yesButton.style.fontSize = '28px'
      }
      else if(noButton.innerHTML === 'Thnik again') {
        noButton.innerHTML = 'Thats mean!'; 
        noButton.style.fontSize = '12px';
        noButton.style.padding = '6px 16px'
        yesButton.style.padding = '26px 36px'
        yesButton.style.fontSize = '32px'
      }
      else if(noButton.innerHTML === 'Thats mean!') {
        noButton.innerHTML = 'I am hurt!!!'; 
        noButton.style.fontSize = '11px';
        noButton.style.padding = '5px 15px'
        yesButton.style.padding = '30px 40px'
        yesButton.style.fontSize = '36px'
      }
      else if(noButton.innerHTML === 'I am hurt!!!') {
        noButton.innerHTML = 'You dont want me fr???'; 
        noButton.style.fontSize = '10px';
        noButton.style.padding = '4px 14px'
        yesButton.style.padding = '34px 44px'
        yesButton.style.fontSize = '36px'
      }
      else if(noButton.innerHTML === 'You dont want me fr???') {
        noButton.innerHTML = 'For me baby, click yes'; 
        noButton.style.fontSize = '9px';
        noButton.style.padding = '3px 13px'
        yesButton.style.padding = '38px 48px'
        yesButton.style.fontSize = '40px'
      }
      else if(noButton.innerHTML === 'For me baby, click yes') {
        noButton.innerHTML = 'Please!!'; 
      }
      else if(noButton.innerHTML === 'Please!!'){
        noButton.innerHTML = 'YESS'; 
        noButton.style.fontSize = '50px';
        noButton.style.padding = '50px 60px'
        noButton.style.backgroundColor = '#23ff2b'
        yesButton.innerHTML = 'YESS'
        yesButton.style.padding = '50px 60px'
        yesButton.style.fontSize = '50px'
      }
      else{
        noButton.addEventListener('click', function() {
            window.location.href = 'third.html'; // Replace with your desired URL
          });
      }

    });

    yesButton.addEventListener('click', function() {
        window.location.href = 'third.html'; // Replace with your desired URL
      });

  });

  
