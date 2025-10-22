import express from "express"
const servidor = express()
const port = 3000
const host = "0.0.0.0"

servidor.listen(port, host, () => {
    console.log(`Servidor Online na porta: ${port} do Host: ${host}`)
})
servidor.get('/', (req, res) => {
    res.send(
        `<!doctype html>
    <html lang="pt-br">
      <head>
       <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            *{
                font-family:"arial";
            }
            .txt{
                color: red;
            }
            body{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        </style>
      </head>
      <body>
        <h1>REAJUSTE SEU SALARIO AQUI!</h1>
        <div>
          <p>Para fazer o reajuste de salário, siga o exemplo abaixo:</p>
        <p>
          <span>http://localhost:3000/?</span>
          <span class="txt">idade=18</span>&
          <span class="txt">sexo=F</span>&
          <span class="txt">salario_base=1700</span>&
          <span class="txt">anosNaEmpresa=2014</span>
        </p>
        <p>
          Parâmetros: idade, sexo (M/F), salário base, e ano de entrada na empresa.
        </p>
        </div>
            </body>
    </html>`
    )
})