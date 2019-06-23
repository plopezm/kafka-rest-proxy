#!/bin/bash

set -x

echo "Cleaning static folder..."
rm src/main/resources/static/*
echo "Building angular app"
cd kafka-rest-proxy-ui
ng build

echo "copying dist folder to static..."
cp dist/kafka-rest-proxy-ui/* ../src/main/resources/static/

echo "Done :)"
