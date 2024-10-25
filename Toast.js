


   // Formu AJAX ile gönderme fonksiyonu
   function submitForm() {
      const form = document.getElementById('toastForm');
      const formData = new FormData(form);

      // Form içindeki inputları kontrol et
      const isEmptyField = Array.from(form.elements).some(input => {
         return input.required && !input.value.trim(); // Boş veya yalnızca boşluk ise
      });

      if (isEmptyField) {
         showToast('Tüm alanları doldurunuz! by❤️esahin', 'error');
         return; // Boş alan varsa gönderme
      }

      fetch(form.action, {
         method: form.method,
         body: formData
      })
         .then(response => {
            if (response.ok) {
               showToast('Başarıyla kaydedildi! by❤️esahin', 'success');
               form.reset(); // Formu temizle
            } else {
               showToast('Bir hata oluştu!', 'error');
            }
         })
         .catch(() => showToast('Bir hata oluştu!', 'error'));
   }

   // Toast gösterme fonksiyonu
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
      }, 5000); // 5 saniye sonra toast kaybolur
   }

