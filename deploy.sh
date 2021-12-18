#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

ls
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
echo "# kornsinanju.github.io" >> README.md
git init
git add *
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:kornsinanju/kornsinanju.github.io.git main
# git pull
# git push https://github.com/kornsinanju/kornsinanju.github.io main -f
# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

