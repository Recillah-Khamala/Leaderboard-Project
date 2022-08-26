import './style.css';
import { add, display, refresh} from './api.js';

display ();

refreshBtn.addEventListener('click', refresh);
submit.addEventListener('click', add)