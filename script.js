function calculatebmi () {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
  
    if (height == "" || weight == "") {
      alert("Silahkan di lengkapi form hitung BMI!");
      return;
    }
  
   height = height / 100;
  
   let bmi = weight / (height * height);
  
   bmi = bmi.toFixed(2);
  
   document.querySelector("#result").innerHTML = bmi;
  

   let status = "";
    
      if (bmi < 18.5) {
          status = 'Kekurangan Berat Badan';
      } else if (bmi >= 18.5 && bmi < 24.9) {
          status = 'Normal (Ideal)';
      } else if (bmi >= 25 && bmi < 29.9) {
          status = 'Kelebihan Berat Badan';
      } else {
          status = 'Kegemukan (Obesitas)';
      }
  

      document.querySelector(
          ".comment"
        ).innerHTML = `Anda Memiliki <span id="comment">${status}</span>`;
  
      };
  

  function reset() {
      document.getElementById("weight").value = "";
      document.getElementById("height").value = "";
      document.getElementById("age").value = "";
      document.getElementById("result").innerHTML = "0";
      document.querySelector(".comment").innerHTML = "Hasil BMI diantara 0 dan Tidak Ada";
  }