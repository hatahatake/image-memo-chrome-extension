
chrome.contextMenus.create({
  "title" : "画像をメモ",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick":function(info){
    addImageUrl(info.srcUrl);
  }
});
