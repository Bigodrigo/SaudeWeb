# Notificações Saúde Web
## (Atualizado) - 16/05/2023
### Este projeto é um site que permite enviar mensagens personalizadas para um celular que tenha instalado o aplicativo do Saúde App!

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>
</p>

Foi criado um protótipo de aplicativo para o Saúde App, acessível em:
https://github.com/Bigodrigo/SaudeApp

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript e JSON
- React
- [Tailwind](https://tailwindcss.com/)
- [Next JS](https://nextjs.org/)
- [Firebase](https://firebase.google.com/docs?hl=pt-br)
- [Node e NPM](https://nodejs.org/)

## 💻 Projeto

Para fazer a comunicação junto a este aplicativo, um funcionário pode localizar um segurado e enviar uma mensagem específica, por exemplo, se o boleto venceu, ou quando necessário iniciar uma conversa, enviando [mensagens](/assets/enviado.png) para este segurado!

Todas as informações ficam salvas no [BD do Firebase](/assets/firebase.png), onde guardamos a mensagens, suas respostas e suas datas de envio.
Fizemos uma verificação onde somente os funcionários do financeiro podem enviar as mensagens, o site permite criar contas teste e consultar a situação dos funcionários, seus dados e suas mensagens!

Este site estará rodando na Vercel acessível em:
https://saude-web.vercel.app/

É importante ressaltar que algumas informações são sigilosas e não foram enviadas para o Git! As configurações (credenciais) do FB são específicas para cada usuário! Se vc deseja clonar este projeto é importante saber que estes arquivos precisam ser alterados!

- [ ] components/Firebase/messaging.js
- [ ] lib/fireConfig.js
- [ ] components/Firebase/firebase.js
## 🔖 Layout

<div align="center">
    <p>Home:</p>
    <img src="/assets/home.png">
</div>

<div align="center">
    <p>Mensagens:</p>
    <img src="/assets/enviado.png">
    <img src="/assets/resposta.png">
</div>

<div align="center">
    <p>No celular:</p>
    <img src="/assets/SS.png">
</div>