
function getImageUrls(callback) {
  chrome.storage.sync.get('urls', function(items) {
    urls = items['urls'];
    if(!urls) {
      urls = [];
    }
    callback(urls);
  });
}

function addImageUrl(url) {
  urls = getImageUrls(function(urls){
    urls.push(url);
    chrome.storage.sync.set({'urls': urls});
  });
}

function delImageUrl(url) {
  // hoge
}
