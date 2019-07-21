#! /bin/bash
# set -u
set -e

echo "+++++++++++++++++++++++++++++++++++++++++++"
echo "++++++++++++ Start WebHooks +++++++++++++++"
echo "+++++++++++++++++++++++++++++++++++++++++++"
cd "$1"

echo "pull code from remote repository"
git pull
echo "pull finished and re/start index.js"

PIDS=`ps -ef|grep "$1/$2.js"|grep -v grep`
if [ "$PIDS" != "" ]; then
pm2 restart "$2.js"
echo "service restart!"
else
pm2 start "$2.js"
echo "service started!"

echo "-------------------------------------------"
echo "-------------- End WebHooks ---------------"
echo "-------------------------------------------"