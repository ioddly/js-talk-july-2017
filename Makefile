# Makefile - build gh-pages

all:
	git co gh-pages
	git merge master
	cd october-2018-test-talk && npm run build && git add dist/index.html dist/main.js
	git commit -m "gh-pages build ${shell date}" 
