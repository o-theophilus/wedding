import { writable } from 'svelte/store';

export const openMobileMenu = writable(false);
export const isMobile = writable(true);
export const title = writable("Mr. & Mrs.");

export const days = writable();