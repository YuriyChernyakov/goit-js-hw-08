const throttle = require('lodash.throttle');
const feedback = document.querySelector('.feedback-form');
const CURRENT_DATA = 'feedback-form-state';
const localstData = JSON.parse(localStorage.getItem(CURRENT_DATA));
const localstForm = {};

const onInput = event => {
    localstForm [event.target.name] = event.target.value;
    localStorage.setItem(CURRENT_DATA, JSON.stringify(localstForm ));
};

feedback.addEventListener('input', throttle(onInput, 500));

const fillForm = () => {
    localstData&&localstData.email ? feedback.email.value = localstData.email: null;
      localstData&&localstData.message ? feedback.message.value = localstData.message: null;
}

fillForm();

const submitClick = event => {
    event.preventDefault();
    event.currentTarget.reset();
    console.log('email', feedback.email.value);
    console.log('message:', feedback.message.value);
}

feedback.addEventListener('submit', submitClick)