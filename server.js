var config = require('./config.js')

var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var request = require('request');
var engine = require('ejs-locals')

app.engine('ejs', engine)
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  request({ url: `https://${config.jira_hostname}/rest/api/2/search?jql=labels=ga-hero+AND+assignee=Empty`,
            headers: {
              'Authorization': config.auth
            },
            encoding: 'utf8'
          }, (err, response, body) => {
            data = JSON.parse(body)
            res.render('index', {issues: data.issues})
          })
})

app.listen(PORT, () => {
  console.log(`Alive and listening on port ${PORT}`)
});

