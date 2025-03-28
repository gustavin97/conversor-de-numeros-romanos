# desafio dev 
## conversor de números romanos 

##HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Conversor</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
  <h1>Conversor de numeros romanos</h1>


  <label for="numero romano">Número romano:</label>
  <input type="text" id="numero-romano">

  <button onclick="converter()">Converter</button> 

<div id="resultado">
  <p id="resultado-texto">Resultado</p>
</div>


</div>

<script src="java.js">

</script>
  
</body>
</html>

## CSS

body {
  font-family: Arial, sans-serif;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color:#fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
}

h1 {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  margin: 10px 0;
  width: 80%;
  border-radius: 4px;
  border: 1px solid blue;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: blue;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

#resultado {
  margin-top: 20px;
}

#error {
  color: red;
}

  
##JAVASCRIPT

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

