function checkPassword() {
      var password = document.getElementById('passwordInput').value;
      // يمكنك تغيير كلمة المرور إلى ما تريد هنا
      if (password === 'AAS2024*2025#') {
        document.getElementById('praivte-data').style.display = 'block'; // عرض المحتوى
      } else {
        alert('كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى.');
      }
      // لمسح حقل كلمة المرور بعد كل محاولة
      document.getElementById('passwordInput').value = '';
    }