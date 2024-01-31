function copyToClip(self) {
    navigator.clipboard.writeText('mc.scallywagsmp.com');
    self.innerHTML = '<p style="font-size: 18px; margin: 0;"><strong>Copied!</strong></p>'
    setTimeout(function(){
        self.innerHTML = '<p style="font-size: 18px; margin: 0;"><strong>Server IP:</strong> mc.scallywagsmp.com <i>(click to copy)</i></p>'
    }, 1000)
}