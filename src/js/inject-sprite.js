import spriteUrl from '../img/spritev1.svg?raw';

export function injectSvgSprite() {
  const div = document.createElement('div');
  div.style.display = 'none';
  div.innerHTML = spriteUrl;
  document.body.insertBefore(div, document.body.firstChild);
}