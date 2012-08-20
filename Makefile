
build: components index.js
	@component build

components:
	@Component install

clean:
	rm -fr build components

.PHONY: clean
