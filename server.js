var Dotenv = require('dotenv');
Dotenv.load();

var PORT          = process.env.PORT || 3000;
var jira_hostname = process.env.JIRA_HOSTNAME;
var jira_auth     = process.env.JIRA_AUTH;

var express = require('express');
var app = express();
var request = require('request');
var engine = require('ejs-locals')

app.engine('ejs', engine)
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/api/issues', (req, res) => {
  request({ url: `https://${jira_hostname}/rest/api/2/search?jql=labels=enterprise&expand=renderedFields`,
            headers: {
              'Authorization': jira_auth
            },
            encoding: 'utf8'
          }, (err, response, body) => {
            res.json(body)
          })
  // res.json(JSON.stringify({ startAt: 0, maxResults: 50, total: 0, issues: []}))
})

app.listen(PORT, () => {
  console.log(`Alive and listening on port ${PORT}`)
});

