const modal = document.getElementById("prayerModal");
const home = document.getElementById("prayerForm");
function openModal(){
    if(!modal)return;
    modal.style.display="flex";
    document.body.classList.add(modal-open)
    const firstField = document.getElementById("name");
    if (firstField){
    setTimeout(() =>firstField.focus(),50);
}
}
function closeModale(){
    if(!modal)return
    modal.style.display="none"
    document.body.classList.remove(modal-open)
}
if(modal){
    window.onclick = function(event) {
     if(event.target === modal){
         closeModale();
     }
    }
}