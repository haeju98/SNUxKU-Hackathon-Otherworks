function replaceRightAd(youtubeURL) {
  if (youtubeURL === '') {
    youtubeURL = 'https://youtu.be/mJS1TL3DHnM';
  }
  var indexofslash = youtubeURL.lastIndexOf('/');
  var indexofequal = youtubeURL.lastIndexOf('=');
  var indexofend = youtubeURL.length;
  if (indexofequal === -1) {
    youtubeID = youtubeURL.substring(indexofslash + 1, indexofend);
  } else {
    youtubeID = youtubeURL.substring(indexofequal + 1, indexofend);
  }
  var str =
    '<iframe id="da_iframe_rolling" width="350" height="200" src="https://www.youtube.com/embed/' +
    youtubeID +
    '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>'; //it can be anything

  // target tag to replace
  var targetObjectID = 'da_iframe_rolling'; //any element to be fully replaced
  var Obj = document.getElementById(targetObjectID);
  if (Obj.outerHTML) {
    //if outerHTML is supported
    Obj.outerHTML = str; ///it's simple replacement of whole element with contents of str var
  } else {
    //if outerHTML is not supported, there is a weird but crossbrowsered trick
    var tmpObj = document.createElement('div');
    tmpObj.innerHTML = '<!--THIS DATA SHOULD BE REPLACED-->';
    ObjParent = Obj.parentNode; //Okey, element should be parented
    ObjParent.replaceChild(tmpObj, Obj); //here we placing our temporary data instead of our target, so we can find it then and replace it into whatever we want to replace to
    ObjParent.innerHTML = ObjParent.innerHTML.replace(
      '<div><!--THIS DATA SHOULD BE REPLACED--></div>',
      str
    );
  }
  document.getElementById('query').value = '';
}

replaceRightAd('');
