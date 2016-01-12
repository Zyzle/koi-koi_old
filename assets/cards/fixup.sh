#! /bin/bash

find ./ -maxdepth 1 -type f -exec sed -i 's/<svg xmlns="http:\/\/www.w3.org\/2000\/svg" width="372" height="587" viewBox="0 0 372 587">/<svg xmlns="http:\/\/www.w3.org\/2000\/svg" height="100%" viewBox="0 0 372 587">/g' {} \;
