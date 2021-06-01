import { writable } from 'svelte/store';

export const openMobileMenu = writable(false);
export const isMobile = writable(true);
export const miniBar = writable(false);
export const title = writable('Bami & Dayo');
export const date = writable('December 12, 2021');

export const days = writable();
