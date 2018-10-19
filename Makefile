index.html: README.md
	pandoc -o $@ --template=template.html $<


