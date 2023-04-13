#? Command history
# Install global npm package for npm
sudo npm i -g npm

# Install required packages for React development
npm i react@^17 react-dom@^17

npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader

# Bundler
npm i -D webpack webpack-cli webpack-dev-server
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin css-loader style-loader
npm i -D css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin

# Hosting
npm i -D gh-pages cname-webpack-plugin

# Extra commands
npm i -D sass sass-loader
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material
npm i mui-datatables papaparse
