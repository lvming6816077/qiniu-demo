<?php
require_once("io.php");
require_once("rs.php");
function GrabImage($url,$filename="aaa.jpg") {
if($url=="") return false; 
$file = file_get_contents($url);
$fp = fopen($filename, 'w'); 
fwrite ($fp, $file); 
fclose ($fp); 
return $filename;
} 
//$f = imagecreatefromjpeg('http://ww1.sinaimg.cn/bmiddle/70656d14jw1ejjaqhjcrnj20c80c20ti.jpg');die;
//var_dump($f);die;
$bucket = "tenny";
$key1 = "file_name21";
$accessKey = 'a4UIWOIX6L49ohUM9KHetcFndgZGodOhgFTTHUm2';
$secretKey = 'ozB7nR_AbwQR2qvbDRJxi5vyrfPvtK7xCcmh7hYQ';

Qiniu_SetKeys($accessKey, $secretKey);
$putPolicy = new Qiniu_RS_PutPolicy($bucket);
$upToken = $putPolicy->Token(null);
$putExtra = new Qiniu_PutExtra();// GrabImage('http://ww1.sinaimg.cn/bmiddle/70656d14jw1ejjaqhjcrnj20c80c20ti.jpg')
$putExtra->Crc32 = 1;
list($ret, $err) = Qiniu_PutFile($upToken, $key1, dirname(__FILE__).'/aaa.jpg', $putExtra);
echo "====> Qiniu_PutFile result: \n";
if ($err !== null) {
    var_dump($err);
} else {
    var_dump($ret);
}


?>