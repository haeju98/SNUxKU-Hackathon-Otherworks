function replaceCenterAd() {
  var str =
    '<img id="da_iframe_time" src="https://user-images.githubusercontent.com/33405572/90306707-b8201a00-df0a-11ea-8692-e0b26612d465.jpeg" width="750" height="135" marginwidth="0" scrolling="no" frameboarder="0"/>';
  // target tag to replace
  var targetObjectID = 'da_iframe_time'; //any element to be fully replaced
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
replaceCenterAd();
