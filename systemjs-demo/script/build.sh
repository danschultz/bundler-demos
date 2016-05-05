#!/bin/sh

./node_modules/babel-cli/bin/babel.js src/main.js src/views/app.js \
  --module-ids --source-root src --module-root src \
  -o dist/main.js
