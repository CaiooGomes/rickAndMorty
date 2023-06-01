document.getElementById("sendMessageBtn").addEventListener("click",()=>SendMessage());

const SendMessage = ()=>{
    var phoneNumber = "12988999999";
    var message = "olá gostei muito do seu site";
    var whatsappUrl = "https://api.whatsapp.com/send?phone=";
    var apiUrl = whatsappUrl + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiUrl,"_blank")
}