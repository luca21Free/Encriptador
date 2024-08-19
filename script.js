const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none"
}

function encriptar(stringEncriptada){
/*arreglos multifuncionales*/
let matrizCodigo=[["e", "enter"],["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
/*console.table(matrizCodigo)*/
stringEncriptada=stringEncriptada.toLowerCase()
    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value="";
  
}
function desencriptar(stringDesencriptada){
    /*arreglos multifuncionales*/
let matrizCodigo=[["e", "enter"],["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
/*console.table(matrizCodigo)*/
stringDesencriptada=stringDesencriptada.toLowerCase()
    for(let i=0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }

    }
    return stringDesencriptada

}

/*validando solo letras*/
document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.querySelector(".text-area");
     
    function validateInput(event) {
        // Solo permite letras minúsculas sin acento
        const input = event.target.value;
        const sanitizedInput = input
            .toLowerCase() // Convertir todo a minúsculas
            .replace(/[^a-z]/g, ''); // Eliminar todo excepto letras minúsculas

        event.target.value = sanitizedInput;
    } 

    textArea.addEventListener('input', validateInput);
    
});

async function copy() {
    const copiarmensaje = document.querySelector(".text-mensaje");
    
        try {
            // Usa la API moderna del portapapeles
            await navigator.clipboard.writeText(copiarmensaje.value);
            alert('Texto copiado al portapapeles!');
        } catch (err) {
            alert('Error al copiar al portapapeles: ' + err);
        }
            
}