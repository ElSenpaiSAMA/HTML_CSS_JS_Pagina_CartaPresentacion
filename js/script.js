document.getElementById("cv").addEventListener("click", function() {
    let enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = "archivos/CV.pdf"; 
    enlaceDescarga.download = "CV.pdf"; 
    enlaceDescarga.click();
});