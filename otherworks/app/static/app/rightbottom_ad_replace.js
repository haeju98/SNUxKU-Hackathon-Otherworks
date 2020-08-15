function replaceRightBottomAD() {
  var webtoonID = '727188/69/20200710102746_45c56fcec1e3ac09d60f5cfd3acc2747';
  var jpgcount = 49;
  var webtoonURL =
    'https://image-comic.pstatic.net/webtoon/' + webtoonID + '_IMAG01_';

  var str =
    '<div class="wt_viewer" id="shopcast_iframe" style="background:#FFFFFF;width:350px; height: 1000px; overflow:auto;">';
  for (i = 1; i < jpgcount + 1; i++) {
    str +=
      '<img src="' +
      webtoonURL +
      i +
      '.jpg" title="" alt="comic content" id="content_image_' +
      i +
      '" style="max-width:100%;" oncontextmenu="return false" ondragstart="return false" onselectstart="return false" class="">';
  }
  str += '</div>';

  // target tag to replace
  var targetObjectID = 'shopcast_iframe'; //any element to be fully replaced
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
}

replaceRightBottomAD();
