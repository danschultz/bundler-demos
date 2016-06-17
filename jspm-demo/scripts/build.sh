#!/bin/sh

set -e

rm -fr dist/
mkdir dist/

mkdir dist/jspm_packages
cp jspm_packages/system.* dist/jspm_packages

jspm bundle react + react-dom + immutable dist/vendor.js  --inject
jspm bundle src/utils/**/*.js - dist/vendor.js dist/utils.js --inject
jspm bundle src/main.js - dist/vendor.js - dist/utils.js dist/main.js --inject

cp jspm.*.js dist/

jspm unbundle

cp index.html dist/
