function onScanSuccess(decodedText, decodedResult) {
    
            function linkify(urlqr) { 
            var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig; 
            return urlqr.replace(urlRegex, function(urlq) { 
                window.location.href = urlq;
            }); }
            
    let url = decodedText;
    linkify(url);
        
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 20, qrbox: 200 });
    html5QrcodeScanner.render(onScanSuccess);
