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
          <span>http://localhost:3000/funcionario?</span>
          <span class="txt">id=18</span>&
          <span class="txt">sex=F</span>&
          <span class="txt">sal=1700</span>&
          <span class="txt">anos=10</span>
        </p>
        <p>
          Parâmetros: idade, sexo (M/F), salário base e anos tabalhados na empresa 
        </p>
        </div>
            </body>
    </html>`
  )
})
servidor.get('/funcionario', (req, res) => {
  const idade = parseInt(req.query.id)
  const genero = req.query.sex?.toUpperCase()
  const salario = parseFloat(req.query.sal)
  const ano = parseInt(req.query.anos)
  if (!idade || !genero || !salario || !ano) {
    res.write(
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
            h1{
              color: red;
              font-size: 2.5rem;
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
        <h1>TODOS OS CAMPOS DEVEM SER PREENCHIDOS!!</h1>
        <div>
        <p>
          <span>http://localhost:3000/funcionario?</span>
          <span class="txt">id=18</span>&
          <span class="txt">sex=F</span>&
          <span class="txt">sal=1700</span>&
          <span class="txt">anos=10</span>
        </p>
        <p>
          Parâmetros: idade, sexo (M/F), salário base e anos tabalhados na empresa 
        </p>
        </div>
            </body>
    </html>`
    )
  } else {
    if (idade >= 18 && idade <= 39) {
      let reajusteM = 10
      let reajusteF = 8
      if (genero == "M" && ano >= 10) {
        let reajuste = (salario * reajusteM) / 100
        let novoSalario = salario + reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      } else {
        let reajuste = (salario * reajusteM) / 100
        let novoSalario = salario - reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      }
      if (genero == "F" && ano >= 10) {
        let reajuste = (salario * reajusteF) / 100
        let novoSalario = salario + reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      } else {
        let reajuste = (salario * reajusteF) / 100
        let novoSalario = salario - reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      }
    } else if (idade >= 40 && idade <= 69) {
      let reajusteF = 10
      let reajusteM = 8
      if (genero == "M" && ano >= 10) {
        let reajuste = (salario * reajusteM) / 100
        let novoSalario = salario + reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      } else {
        let reajuste = (salario * reajusteM) / 100
        let novoSalario = salario - reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      }
      if (genero == "F" && ano >= 10) {
        let reajuste = (salario * reajusteF) / 100
        let novoSalario = salario + reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      } else {
        let reajuste = (salario * reajusteF) / 100
        let novoSalario = salario - reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      }
    }else if(idade >= 70 && idade <= 99){
      let reajusteF = 15
      let reajusteM = 17
      if (genero == "M" && ano >= 10) {
        let reajuste = (salario * reajusteM) / 100
        let novoSalario = salario + reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      } else {
        let reajuste = (salario * reajusteM) / 100
        let novoSalario = salario - reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      }
      if (genero == "F" && ano >= 10) {
        let reajuste = (salario * reajusteF) / 100
        let novoSalario = salario + reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      } else {
        let reajuste = (salario * reajusteF) / 100
        let novoSalario = salario - reajuste
        res.send(`Seu novo salario é: ${novoSalario}`)
      }
    }else{
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
            h1{
              color: red;
              font-size: 2.5rem;
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
        <h1>ERRO!! AS INFORMAÇÕES ESTÃO INCORRETAS!</h1>
        <div>
        <p>
          <span>http://localhost:3000/funcionario?</span>
          <span class="txt">id=18</span>&
          <span class="txt">sex=F</span>&
          <span class="txt">sal=1700</span>&
          <span class="txt">anos=10</span>
        </p>
        <p>
          Parâmetros: idade, sexo (M/F), salário base e anos tabalhados na empresa 
        </p>
        </div>
            </body>
    </html>`
      )
    }
  }
})
