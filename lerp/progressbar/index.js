import { render } from '../../lib/flow/index.js';
import { navbar } from '../../components/header/index.js';
import { progressbar } from './progressbar.js';

const navbarEl = document.getElementById('navbar');

window.addEventListener('DOMContentLoaded', () => {
  render(navbar(), navbarEl);
  progressbar();
});
