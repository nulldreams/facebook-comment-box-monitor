# facebook-comment-box-monitor

Tutorial dedicado a quem pensa ou está desenvolvendo algo e precisa monitorar os comentários do facebook em sites "real time".
 
## Server
**1º** Faça o clone do repositório `git clone https://github.com/nulldreams/facebook-comment-box-monitor.git` (vamos voltar no código na parte final apenas)

**2º** Use o `npm i && npm start`

**3º** Baixe o [ngrok](https://ngrok.com/download) extraia o `ngrok.exe`, abra o terminal/prompt e execute `ngrok http 5000`, o ngrok criará um túnel na sua rede e deixará sua porta 5000 acessível para redes externas.
 
## Facebook - Webhook

**1º** Criar um aplicativo em https://developers.facebook.com/quickstarts/?platform=web
 > Clique em "Skip" para pular a configuração do app
 
**2º** Clique em "+ Adicionar Produto" e escolha a opção *Webhooks* 
 
**3º** Agora copie a url **com https** que o `ngrok` gerou para você e cole na configuração do webhook e adicione a rota `/webhook` que temos no nosso servidor, é lá que ele validará se a url de callback está funcionando
![Alt text](https://raw.githubusercontent.com/nulldreams/facebook-comment-box-monitor/master/img/3.PNG)

**4º** Copie o ID do seu aplicativo e substitua no arquivo `public/index.html` onde está `__app_id` copie a url do `ngrok` e cole no lugar de `__ngrok_url`

## Facebook - Token
**1º** Siga os passos abaixo para criar um token dahora para usarmos no servidor, acesse: https://developers.facebook.com/tools/explorer/ e escolha o seu aplicativo na caixa de seleção.
![Alt text](https://raw.githubusercontent.com/nulldreams/facebook-comment-box-monitor/master/img/5.PNG)
![Alt text](https://raw.githubusercontent.com/nulldreams/facebook-comment-box-monitor/master/img/7.PNG)
![Alt text](https://raw.githubusercontent.com/nulldreams/facebook-comment-box-monitor/master/img/6.PNG)
![Alt text](https://raw.githubusercontent.com/nulldreams/facebook-comment-box-monitor/master/img/8.PNG)

**2º** Copie o token gerado (ele é válido por 60 dias apenas 😟) e substitua no arquivo `server.js` onde está `__token`

**3º** Reinicie o servidor, acesse a url que o `ngrok` gerou e faça um comentário, no terminal do servidor terá um retorno assim:
```console 
C:\projetos\facebook-comments-webhook>nodemon server.js
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
On 5000
Profile: http://facebook.com.br/1757356650943407
Name: Igor Souza Martins
Message: Salve!
```
