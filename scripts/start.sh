#!/usr/bin/env bash

PROJECT_ROOT="/home/ubuntu/app"
APP_NAME="project"

TIME_NOW=$(date +%c)

cd $PROJECT_ROOT

git pull origin main
pm2 delete $APP_NAME
pm2 start npm -- start

echo "$TIME_NOW > Deploy has been completed"