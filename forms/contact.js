

      const scriptURL = "https://script.google.com/macros/s/AKfycbzCeiWbeSMlnnwd0tFyHxikDebx5w92bff9c0ext31zQzgzMpeDwddD1ylsmigqX7fbPQ/exec";
      const form = document.forms["waju-berru-contact-form"];
      const btnKirim = document.querySelector('.btn-kirim')
      const btnLoading = document.querySelector('.btn-loading')
      const myAlert = document.querySelector('.btn-alert')

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Menghilakan Tombol Kirim
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            console.log("Success!", response)
            myAlert.classList.toggle('d-none')
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });
