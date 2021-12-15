function initialize(){
  
  mainImage = document.getElementById("mainimg");
  captionOutput = document.getElementById("caption")
  infoOutput = document.getElementById("info");
  itemThumbs = document.getElementsByClassName("thumb");
  document.getElementById("pagetitle").innerHTML = pageTitle;

  currentItemIdx = 0;
  offset =0;
  display();
}
function display()
{
  mainImage.src = "images/" + itemList[currentItemIdx].itemImage;
  
  captionOutput.innerHTML = itemList[currentItemIdx].itemName;
  infoOutput.innerHTML = itemList[currentItemIdx].itemInfo;

  for (var i =0; i<itemThumbs.length; i++){
    itemThumbs[i].src= "images/" + itemList[i + offset].itemImage;
  }
}
function moveOffset(mod)
{
  offset += mod;
  if (offset<0){
    offset=0;
  }
  if (offset >= itemList.length-3){
    offset = itemList.length -3;
  }
  display();
}
function selectItem(idx){
  currentItemIdx = idx + offset;
  display();
}
pageTitle = "Dragona";
itemList = [{itemName:"Rax",itemInfo:"scout",itemImage:"Rax copy.png"} , {itemName:"Ash",itemInfo:"enemies",itemImage:"Ash copy.png"}, {itemName:"Barnabas",itemInfo:"wise",itemImage:"Barnabas copy.png"}, {itemName:"Drake",itemInfo:"Master", itemImage:"Drake copy.png"}, {itemName:"Endisun",itemInfo:"electricity",itemImage:"Endisun copy.png"} , {itemName:"Lunar",itemInfo:"heal",itemImage:"Lunar copy.png"}]