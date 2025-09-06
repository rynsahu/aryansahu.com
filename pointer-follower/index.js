import { render } from '../lib/flow/index.js';
import { navbar } from '../components/header/index.js';
import { followPointer } from './pointer.js';

const navbarEl = document.getElementById('navbar');
render(navbar(), navbarEl);

const pointerEl = document.querySelector('.pointer');
followPointer(pointerEl);
