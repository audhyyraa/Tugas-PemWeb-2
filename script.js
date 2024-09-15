document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const output = document.getElementById('output');
    
    // Event 1: Focus on Nama field
    form.name.addEventListener('focus', function() {
      this.style.borderColor = '#007BFF';
    });
  
    // Event 2: Blur on Nama field
    form.name.addEventListener('blur', function() {
      this.style.borderColor = '';
    });
  
    // Event 3: Input event on NIM field
    form.nim.addEventListener('input', function() {
      output.innerHTML = `NIM saat ini: ${this.value}`;
    });
  
    // Event 4: Change event on Kelas field
    form.kelas.addEventListener('change', function() {
      output.innerHTML = `Kelas yang dipilih: ${this.value}`;
    });
  
    // Event 5: Submit form
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = form.name.value;
      const nim = form.nim.value;
      const kelas = form.kelas.value;
      const alamat = form.alamat.value;
      
      output.innerHTML = `
        <h3>Data Mahasiswa:</h3>
        <p>Nama: ${name}</p>
        <p>NIM: ${nim}</p>
        <p>Kelas: ${kelas}</p>
        <p>Alamat: ${alamat}</p>
      `;
      
      form.reset(); // Clear form fields after submission
    });
    
    // Event 6: Double-click event on Nama field to clear it
    form.name.addEventListener('dblclick', function() {
      this.value = '';
      output.innerHTML = 'Nama telah direset.';
    });
  });
  