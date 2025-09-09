#!/bin/bash

cd /home/seamusic/seamusic-frontend || exit

git checkout master
git pull origin master

npm install

npm run build

sudo systemctl restart seamusic-frontend-production