all: build

build:
	zip -r follow-on-mastodon icons/*.png options/*.js options/*.html popup/*.js popup/*.html manifest.json LICENSE

clean:
	rm *.zip

.PHONY: all build clean
