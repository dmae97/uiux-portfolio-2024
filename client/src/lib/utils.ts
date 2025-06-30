import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  } else {
    return new Promise((resolve, reject) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        resolve();
      } catch (err) {
        reject(err);
      }
      
      document.body.removeChild(textArea);
    });
  }
}

export function showNotification(message: string) {
  const notification = document.createElement('div');
  notification.className = 'fixed top-20 right-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg z-50 transform translate-x-full transition-transform duration-300';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}
