zap = document.getElementById("zap")
zap.innerHTML = '<img id="sendMessageBtn" src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png" alt="">'
document.getElementById("sendMessageBtn").addEventListener("click",()=>SendMessage());
const SendMessage = ()=>{
    var phoneNumber = "12988999999";
    var message = "olá gostei muito do seu site";
    var whatsappUrl = "https://api.whatsapp.com/send?phone=";
    var apiUrl = whatsappUrl + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiUrl,"_blank")
}