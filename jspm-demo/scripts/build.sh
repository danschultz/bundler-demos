#!/bin/sh

set -e

jspm bundle react + react-dom + immutable dist/vendor.js --config jspm.bundle.js --inject
jspm bundle src/utils/math.js + src/utils/geom.js - dist/vendor.js dist/utils.js --config jspm.bundle.js --inject
jspm bundle src/main.js - dist/vendor.js - dist/utils.js dist/main.js --config jspm.bundle.js --inject
