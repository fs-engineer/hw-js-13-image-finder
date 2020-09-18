import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function viewPNotify(num) {
  const myInfo = info({
    text: `${num} page loaded`,
    delay: 1000,
  });
}
