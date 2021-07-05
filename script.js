// завдання  1

import { createServer } from "http";
import { userInfo, type, uptime } from 'os';
import { dirname, basename } from "path";
createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("<h1> System information</h1>");
  response.write(`<h2>User Name:  ${userInfo().username} </h2> `);
  response.write(`<h2>OS Type:  ${type()} </h2> `);
  response.write(`<h2>System Work time:  ${Math.floor(uptime()/60)} minutes</h2> `);
  response.write(`<h2>Current Work directory:  ${dirname('/D/Homework/Homework11/HW11.js')} </h2> `);
  response.write(`<h2>Server File name:  ${basename('/D/Homework/Homework11/HW11.js')} </h2> `);
  
 
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');

//завдання  2
import { createServer } from 'http';
 import { userInfo } from 'os';
 import { date, getMessage } from './personalmodule.js';

const username = userInfo().username;

createServer(function (request, response) {
     response.writeHead(200, {'Content-Type': 'text/html'});
     response.write(`Date of request - ${date}`);
     response.write(`<p>${getMessage(username)}</p>`);
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');