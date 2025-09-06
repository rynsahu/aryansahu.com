import { render } from '../lib/flow/index.js';
import { navbar } from '../components/header/index.js';
import { pointer } from './pointer.js';

const navbarEl = document.getElementById('navbar');
render(navbar(), navbarEl);

const pointerEl = document.querySelector('.pointer');
pointer(pointerEl);
