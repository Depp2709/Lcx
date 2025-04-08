document.getElementById('generateButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    
    // Validasi URL
    if (!urlInput) {
        alert('Silakan masukkan URL yang valid.');
        return;
    }

    // Buat link tracker (misalnya, menambahkan parameter query)
    const trackerLink = `${urlInput}?tracker=${new Date().getTime()}`;
    
    // Tampilkan link tracker
    document.getElementById('trackerLink').innerText = trackerLink;
});
