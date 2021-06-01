import { writable } from 'svelte/store';

export const openMobileMenu = writable(false);
export const isMobile = writable(true);
export const miniBar = writable(false);
export const title = writable('Bami & Dayo');

export const days = writable();
