(function() {
    function loadTailorTalkWhatsAppWidget(callback) {
      var script = document.createElement('script');
      script.src = "https://plugins.tailortalk.ai/widget_whatsapp.js";
      script.onload = callback;
      document.head.appendChild(script);
    }

    loadTailorTalkWhatsAppWidget(function() {
      window.TailorTalkWhatsApp && window.TailorTalkWhatsApp.init({
  "agentId": "public",
  "whatsappConfig": {
    "businessInfo": {
      "phoneNumber": "5547988695995"
    },
    "buttonText": "WhatsApp",
    "welcomeMessage": "Olá, como poderia lhe ajudar?"
  },
  "position": "right"
});
    });
  })();