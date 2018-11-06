all: build

build:
	zip -r follow-on-mastodon icons options popup manifest.json LICENSE

clean:
	rm *.zip

.PHONY: all build clean
