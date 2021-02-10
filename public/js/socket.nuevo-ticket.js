var socket = io();
var label = $('#lblNuevoTicket')

socket.on('connect', () => {
    console.log('Usuario Conectado');
})

socket.on('disconnect', () => {

    console.log('Usuario desconectado');

})
socket.on('estadoActual', function(resp) {
    console.log(resp.actual);
    label.text(resp.actual)
})
$('button').on('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {

        label.text(siguienteTicket)

    });
})