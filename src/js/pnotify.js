import { info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import apiService from './apiService';

export default function viewPNotify(num) {
  const myInfo = info({
    text: `All found: ${apiService.totalImages},
    ${num} page loaded`,
    delay: 1000,
  });
}
