// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartIcons = document.querySelectorAll('.like-glyph');

function handleHeartClick(event) {
  const heartIcon = event.target;

  mimicServerCall()
    .then(() => {
      if (heartIcon.textContent === EMPTY_HEART) {
        heartIcon.textContent = FULL_HEART;
        heartIcon.classList.add('activated-heart');
      } else {
        heartIcon.textContent = EMPTY_HEART;
        heartIcon.classList.remove('activated-heart');
      }
    })
    .catch((error) => {
      const errorModal = document.getElementById('modal');
      const errorMessage = document.getElementById('modal-message');
      
      errorMessage.textContent = error;
      errorModal.classList.remove('hidden');
      
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Attach click event listener to each heart icon
heartIcons.forEach(heartIcon => {
  heartIcon.addEventListener('click', handleHeartClick);
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
