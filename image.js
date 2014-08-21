var src = document.location.hash.replace('#','');

$('.image-info').attr('src', src);

$('.token-value').click(function(){
    $(this).hide();
    $(this).next('input').val($(this).text()).show().focus();
});
$('.token-input').blur(function(){
    $(this).hide();
    $(this).prev('span').text($(this).val()).show();
});
$('#submit').click(function(){
    var accessKey = $('#accessKey').val();
    var secretKey = $('#secretKey').val();
    var spaceName = $('#spaceName').val();
    var fileName = $('#fileName').val();
    if (accessKey && secretKey && spaceName && fileName) {
        var type = getImageType(src);
        if (type) {
            fileName += type;
        } else {
            fileName += '.jpg';
        }
        $('.loading').show();
       $.ajax({
            'type' : 'POST',
            'url' : 'http://www.nihaoshijie.com.cn/qiniu-server/test.php',
            'data' : {'accessKey' : accessKey, 'secretKey' : secretKey, 'bucket' : spaceName, 'url' : src, 'fileName' : fileName},
            'dataType' : 'json',
            'success' : function(data){
                if (data.status == 'success') {
                    $('.loading').hide();
                    showResult(data.data);
                }
            }
       });
       

    } else {
        alert('input error!');
    }
    
});
function showResult(data){
    var urlPrefix = 'http://' + $('#spaceName').val() + '.qiniudn.com/';
    $('.result-url').attr('href', urlPrefix + data.key);
    $('.result-hash').text(data.hash);
}
function getImageType(url){
    var reg = /\.jpg|\.jpeg|\.png|\.gif/i;
    var match = url.match(reg);
    if (match.length != 0) {
        return match[0];
    } else {
        return false;
    }
}