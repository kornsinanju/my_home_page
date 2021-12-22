#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
echo "# kornsinanju.github.io" >> README.md


# for first push
# git init
# git add *
# git commit -m 'deploy'
# git branch -M main
# git remote add origin github.com:<USERNAME>/<REPO>.git
# git push -u origin main

# if you are deploying to https://<USERNAME>.github.io (second time and so-on)
# git push git@github.com:kornsinanju/kornsinanju.github.io.git main
git add *
git commit -m 'deploy'
git checkout main
git push

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

