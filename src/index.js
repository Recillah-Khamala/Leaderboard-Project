import './style.css';
import { add, show, refresh} from '.api.js';

show ();

refreshBtn.addEventListener('click', refresh);
submit.addEventListener('click', add)