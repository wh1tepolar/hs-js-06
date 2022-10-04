import {throttle} from 'lodash';


const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('form'),
    textarea: document.querySelector('textarea'),
    input: document.querySelector('input')
};

const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
const formData = inputMessage() ?? {};

refs.form.addEventListener('submit', onSubmit)
refs.form.addEventListener('input', throttle(onInput,500))


function onSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData)
    localStorage.removeItem(STORAGE_KEY)
}

function onInput(e) {
formData[e.target.name] = e.target.value
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function inputMessage () {
    if (savedMessage) {
        refs.form.elements.email.value = savedMessage.email;
        refs.form.elements.message.value = savedMessage.message;
    }
}

inputMessage();
