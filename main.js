// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal');
modal.hidden = true;
const heartArticle = document.querySelectorAll(".like-glyph");

function likeEvent(e) {
  const heart = e.target
  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall().catch(() => modal.hidden = false);
    heart.textContent = FULL_HEART;    
    } else {
      heart.textContent = EMPTY_HEART;
    }
};

  heartArticle.forEach(click => click.addEventListener('click', likeEvent))


// Array.from(heartArticle);
// heartArticle.forEach(heartClick);

// function heartClick() {
//   heartArticle.addEventListener('click', myClick => {
//     if (heartArticle.textContent === EMPTY_HEART) {
//       heartArticle.textContent = FULL_HEART;    
//       return mimicServerCall().catch(modal.hidden = false)
//     } else {
//       heartArticle.textContent = EMPTY_HEART;
//     }
//   })
// };



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
