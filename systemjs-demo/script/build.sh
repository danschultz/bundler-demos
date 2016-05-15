#!/bin/sh

./node_modules/babel-cli/bin/babel.js src/main.js src/views/app.js \
  --module-ids --source-root src --module-root src \
  -o dist/main.js

./node_modules/babel-cli/bin/babel.js src/utils/geom.js src/utils/math.js \
  --module-ids --source-root src --module-root src \
  -o dist/utils.js

# == This doesn't work. Each module needs to be wrapped in something
# == SystemJS understands. Look into SystemJS builder...
# cat node_modules/react/dist/react.js > dist/vendor.js
# cat node_modules/react-dom/dist/react-dom.js >> dist/vendor.js
# cat node_modules/immutable/dist/immutable.js >> dist/vendor.js
