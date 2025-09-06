import { navbar } from './components/header/index.js'
import { render } from './lib/flow/index.js'
import { followPointer } from './pointer-follower/pointer.js';

const navbarEl = document.getElementById('navbar');
render(navbar(), navbarEl);

const pointerFollowerEl = document.querySelector('.pointer-follower');
followPointer(pointerFollowerEl, 0.07);