#!/bin/sh

if ! test -d "dist/"; then
  mkdir dist/
fi

rm -fr dist/*

mkdir dist/jspm_packages
cp jspm_packages/system*.js* dist/jspm_packages

jspm bundle app1/src/main.js dist/app1.js --inject

cp jspm.*.js dist/
jspm unbundle

mkdir dist/app1
cp app1/index.html dist/app1
