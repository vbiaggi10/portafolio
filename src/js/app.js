$(document).ready(() => {
  $('.sidenav').sidenav();
});

$(document).ready(() => {
  $('.carousel').carousel();
});

$(document).ready(() => {
  $('.modal').modal();
});

let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10rem";
  }
  prevScrollpos = currentScrollPos;
}

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#textarea1');

document.querySelector('#submit').addEventListener('click', () => {
  if (!name && !email && !message) {
    alert('Por favor completa todos los campos');
  } else {
    sendMail(email.value, name.value, message.value);
    email.value = ''
    name.value = ''
    message.value = ''
  }
})

sendMail = (email, name, message) => {
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
      'message': {
        'from_email': name + '@laboratoria.la',
        'to': [{
          'email': 'vbiaggi10@gmail.com',
          'name': 'Valeria Biaggi',
          'type': 'to'
        }],
        'autotext': 'true',
        'subject': '¡QUIERO CONTACTARME CONTIGO!',
        'html': 'Nombre: ' + name + '   Correo: ' + email + '   Mensaje:' + message
      }
    }
  }).done((response) => {
    return response;
  });
}
