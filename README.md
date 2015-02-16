
Install
-----

**Install node (and npm)**
http://nodejs.org/download/

**Install phantom**
`npm install -g phantomjs`

**Install Casper**
npm install -g casperjs


Setup
-----

Open `config.js`, add your Facebook username and password, make sure you enable
login approvals if you require them.

Open `list.js`, add all the pages you'd like screenshots for. The correct format
is listed in the document header.


RUNNING
-------

**From this folder in terminal**
`casperjs gorabbitgo.js`

All the saved screenshots will be in the 'out' folder, within this directory.
