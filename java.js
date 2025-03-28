function converter() {
  const romano = document.getElementById('numero-romano').value.toUpperCase();
  const resultadoTexto = document.getElementById('resultado-texto');
  const erroDiv = document.getElementById('error');

  
  const valoresRomanos = {
      'I': 1,'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };

  let resultado = 0;
  let erro = false;

  
  for (let i = 0; i < romano.length; i++) {
      if (!valoresRomanos[romano[i]]) {
          erro = true;
          break;
      }
  }

  if (erro) {
      resultadoTexto.textContent = "Erro: Símbolo romano inválido!";
      resultadoTexto.style.color = 'red';
      return;
  }

  
  for (let i = 0; i < romano.length; i++) {
      const valorAtual = valoresRomanos[romano[i]];
      const proximoValor = valoresRomanos[romano[i + 1]];

     
      if (proximoValor > valorAtual) {
          resultado -= valorAtual;
      } else {
          resultado += valorAtual;
      }
  }

 
  resultadoTexto.textContent = `Resultado: ${resultado}`;
  resultadoTexto.style.color = 'black';
}
