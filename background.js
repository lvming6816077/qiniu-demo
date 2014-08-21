var getImageInfo = function (image) {
  var url = 'background.html#' + image.srcUrl;
  chrome.windows.create({ url: url, width: 500, height: 400 ,type : 'popup'});
} 
chrome.contextMenus.create({
  "title" : "Get image info",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getImageInfo
});
