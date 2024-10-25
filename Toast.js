


   
   function submitForm() {
      const form = document.getElementById('toastForm');
      const formData = new FormData(form);


      const isEmptyField = Array.from(form.elements).some(input => {
         return input.required && !input.value.trim(); 
      });

      if (isEmptyField) {
         showToast('Tüm alanları doldurunuz! by❤️esahin', 'error');
         return;
      }

      fetch(form.action, {
         method: form.method,
         body: formData
      })
         .then(response => {
            if (response.ok) {
               showToast('Başarıyla kaydedildi! by❤️esahin', 'success');
               form.reset(); 
            } else {
               showToast('Bir hata oluştu!', 'error');
            }
         })
         .catch(() => showToast('Bir hata oluştu!', 'error'));
   }


   function showToast(message, type = 'success') {
      const toastContainer = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = `toast ${type} show`;
      toast.innerHTML = `
                  <span>${message}</span>
                  <button class="close-btn" onclick="this.parentElement.remove()">×</button>
               `;
      toastContainer.appendChild(toast);
      setTimeout(() => {
         toast.classList.remove('show');
         setTimeout(() => toast.remove(), 500);
      }, 5000);
   }

