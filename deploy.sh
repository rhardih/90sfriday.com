#!/usr/bin/env bash

HOST=90sfriday.com

ftp -u ftp://90sfriday_rene@$HOST/web/ index.html

pushd js
ftp -u ftp://90sfriday_rene@$HOST/web/js/ main.js
popd

pushd css
ftp -u ftp://90sfriday_rene@$HOST/web/css/ main.css
popd
