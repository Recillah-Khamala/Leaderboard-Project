import './style.css';
import { add, display, refresh } from './api.js';

display();

const refreshBtn = document.querySelector('#refreshBtn');
const submit = document.querySelector('#submit');
refreshBtn.addEventListener('click', refresh);
submit.addEventListener('click', add);