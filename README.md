# Saúde Web Notifications
## (Last Update) - 26/05/2023
### This project is a website that facilitates the sending of customized messages to a mobile phone that has the Saúde App installed.

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>
</p>

The prototype of the Saúde App is currently accessible at:
https://github.com/Bigodrigo/SaudeApp


## 🚀 Technologies

This project has been developed employing the following technologies:

- HTML, CSS, JS and TS
- React
- [Tailwind](https://tailwindcss.com/)
- [Next JS](https://nextjs.org/)
- [Firebase](https://firebase.google.com/docs?hl=pt-br)
- [Node e NPM](https://nodejs.org/)


## 💻 Project

(*This project is associated with the application. We highly suggest reading them concurrently to gain a comprehensive understanding.*)

A website has been developed to assist employees of Saúde Inc in sending customized messages to health plan users within the financial sector. To access the application, the employee must first log in and subsequently identify the insured individual.  [Messagens](/assets/enviado.png) can then be dispatched via push notifications.

All data is stored in [Firebase](/assets/firebase.png), where messages, their corresponding responses, and sending dates are maintained. We have implemented a verification system that limits message-sending privileges to financial employees exclusively. Additionally, the website permits the creation of test accounts to review employees' statuses and data, as well as their message records.

This website will be operational via the Vercel platform and can be accessed at:
https://saude-web.vercel.app/

It is of utmost importance to acknowledge that certain information is deemed confidential and has not been transmitted to Git. It should be noted that FB settings, specifically credentials, are unique to each user. In the event that you intend to replicate this project, it is imperative to recognize that modification of these files is essential.

- [ ] components/Firebase/messaging.js
- [ ] lib/fireConfig.js
- [ ] components/Firebase/firebase.js
## 🔖 Layout

<div align="center">
    <p>Home:</p>
    <img src="/assets/home.png">
</div>

<div align="center">
    <p>Messagens:</p>
    <img src="/assets/enviado.png">
    <img src="/assets/resposta.png">
</div>

<div align="center">
    <p>Mobile:</p>
    <img src="/assets/SS.png">
</div>
