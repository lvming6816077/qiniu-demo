var src = document.location.hash.replace('#','');
$('img').attr('src', src);


$('#submit').click(function(){
    var accessKey = $('#accessKey').val();
    var secretKey = $('#secretKey').val();
    var spaceName = $('#spaceName').val();
    if (accessKey && secretKey && spaceName) {
       var token = TOKEN.genUpToken(accessKey,secretKey,{"scope":spaceName,"deadline":1408530477}
);
       localStorage.setItem('token', token);
       alert('set success!');
    } else {
        alert('input error!');
    }
    
});