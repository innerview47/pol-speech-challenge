var express = require('express')
var app = express()
app.use(express.static('./dist/pol-speech-mgmt'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'pol-speech-mgmt/'}
);
});

app.listen(process.env.PORT || 8080);
