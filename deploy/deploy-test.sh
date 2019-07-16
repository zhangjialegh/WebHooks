#! /bin/bash
cd /srv/WebHooks
git pull
pm2 start index.js