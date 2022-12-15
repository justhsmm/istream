function DeteleVideo(id) {
    $.ajax({
        url: "/ajax/api",
        type: "POST",
        dateType: "text",
        data: {
            id: id,
            action: 'XoaVideo'
        },
        success: function(result) {
            if (result.statut == 'success') {
                Swal.fire({
                    title: 'Notification',
                    text: result.messenger,
                    icon: 'success'
                }).then((result) => {
                    window.location.reload();
                })
            } else {
                Swal.fire(
                    'Notification',
                    result.messenger,
                    'error'
                )
            }
        }
    });
}

function LayAccTuHeThong() {
    $.ajax({
        url: "/ajax/api",
        type: "POST",
        dateType: "text",
        data: {
            action: 'LayAccTuHeThong'
        },
        success: function(result) {
            if (result.statut == 'success') {
                Swal.fire({
                    title: 'Notification',
                    text: result.messenger,
                    icon: 'success'
                }).then((result) => {
                    window.location.reload();
                })
            } else {
                Swal.fire(
                    'Notification',
                    result.messenger,
                    'error'
                )
            }
        }
    });
}

function ViewInfoVideo(id) {
    $.ajax({
        url: "/ajax/api",
        type: "POST",
        dateType: "text",
        data: {
            id: id,
            action: 'ViewInfoVieo'
        },
        success: function(result) {
            if (result.statut == 'success') {
                document.getElementById("respviewvideo").innerHTML = result.messenger;
            } else {
                Swal.fire(
                    'Notification',
                    result.messenger,
                    'error'
                )
            }
        }
    });
}
var SendAjax = function(data, url) {
    Swal.fire({
        title: 'In Progress Request Please Wait',
        showConfirmButton: false
    });
    $.ajax({
        url: "/ajax/api",
        type: "POST",
        dateType: "text",
        data: data,
        success: function(result) {
            if (result.statut == 'success') {
                Swal.fire({
                    title: 'Notification',
                    text: result.messenger,
                    icon: 'success'
                }).then((result) => {
                    if (url == 'reload') {
                        window.location.reload();
                    } else if (url) {
                        window.location.href = url;
                    } else {
                        return;
                    }
                })
            } else {
                Swal.fire(
                    'Notification',
                    result.messenger,
                    'error'
                )
            }
        }
    });
}
var CloseTicket = function(id) {
    const data_send = {
        id: id,
        action: 'CloseTicket'
    }
    SendAjax(data_send, 'reload');
}
var SendMessage = function(id_ticket) {
    var ContentMessage = $('#Ticket_Message').val();
    if (ContentMessage != '') {
        const data_send = {
            id: id_ticket,
            content: ContentMessage,
            action: 'MessageTicket'
        }
        SendAjax(data_send, 'reload');
    } else {
        Swal.fire(
            'Notification',
            'Please Fill In What To Send',
            'error'
        )
    }
}
var CheckVideo = function(SlugVideo) {
    const data_send = {
        SlugVideo: SlugVideo,
        action: 'CheckVideo'
    }
    SendAjax(data_send, '');
}
var GetAccessToken = function(email) {
    const data_send = {
        email: email,
        action: 'GetAccessToken'
    }
    SendAjax(data_send, 'reload');
}
$('#remote_driver_to_facebook').click(function() {
    const data_send = {
        id_driver: $('#id_driver').val(),
        name: $('#name').val(),
        subtitle: $('#subtitle').val(),
        lable: $('#lable').val(),
        action: 'remote_driver_to_facebook'
    }
    SendAjax(data_send, 'reload');
});
$('#ClearVideoError').click(function() {
    const data_send = {
        action: 'ClearVideoError'
    }
    SendAjax(data_send, 'reload');
});
