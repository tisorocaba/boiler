var fs = require('fs');

fs.readdirSync('tasks').forEach(function(task) { require('./tasks/' + task); });