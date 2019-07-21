#! /bin/bash

echo "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
cd /srv/WebHooks/

echo "pull code from remote repository"
git pull
echo "pull finished and re/start index.js"

PIDS=`ps -ef|grep "/srv/WebHooks/index.js"|grep -v grep`
if [ "$PIDS" != "" ]; then
pm2 restart index.js
echo "index restart!"
else
pm2 start index.js
echo "index started"

echo "----------------------------------------------------------------------------"