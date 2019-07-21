#! /bin/bash
# set -u
set -e

echo "+++++++++++++++++++++++++++++++++++++++++++"
echo "++++++++++++ Start WebHooks +++++++++++++++"
echo "+++++++++++++++++++++++++++++++++++++++++++"
cd "$1"

echo "Pull Start"

git pull

echo "Pull Finished"

PIDS=`ps -ef|grep "$1/$2.js"|grep -v grep`
if [ "$PIDS" != "" ]; then
pm2 restart "$2.js"
echo "Service Restarted!"
else
pm2 start "$2.js"
echo "Service Started!"

echo "-------------------------------------------"
echo "-------------- End WebHooks ---------------"
echo "-------------------------------------------"