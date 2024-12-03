// =====================================================================
//                              CTA Logic                                 
// =====================================================================
const ctaButtons = Array.from(document.querySelectorAll('.cta-button'));
const popupForm = document.querySelector('.popup-form');
const popupFormContainer = document.querySelector('.popup-form-container'); 

const isCtaButton = (element) => element.classList.contains('cta-button');

let popupFormIsOpen = false;

document.addEventListener('click', (e) => { 
  ctaButtons.forEach((ctaButton) => { 
    if (isCtaButton(e.target)) {
      popupFormIsOpen = true;
    } else if (!ctaButton.contains(e.target) && !popupForm.contains(e.target)) {
      popupFormIsOpen = false;
    }
  });

  if (popupFormIsOpen) {
    popupFormContainer.classList.add('flex');
    popupFormContainer.classList.remove('hidden');
  } else {
    popupFormContainer.classList.add('hidden');
    popupFormContainer.classList.remove('flex');
  }

  console.log(popupFormIsOpen)
});