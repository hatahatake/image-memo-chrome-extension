function writeToClipboard(str) {
    var textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = str;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

function reshape(ary, n) {
  var tmp = [];
  for(var i = 0; i < ary.length; i += n) {
    tmp.push(ary.slice(i, i + n));
  }
  return tmp;
}

$(function() {
  getImageUrls(function(urls) {
    urls = reshape(urls, 4);
    container = $("#container");
    for (var i = 0; i < urls.length; i++) {
      tr = $('<tr></tr>');
      for (var j = 0; j < urls[i].length; j++) {
        img = $('<img />', {
          "src": urls[i][j],
          "class": "thumbnail",
          "on": {
            click: function() {
              src = $(this).attr('src');
              writeToClipboard(src);
            }
          }
        });
        tr.append($('<td></td>').append(img));
      };
      container.append(tr);
    };
  });
});
