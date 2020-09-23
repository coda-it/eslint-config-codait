.PHONY: version
version:
	git tag $(V)
	./scripts/changelog.sh
	$(NPM) version $(V) --no-git-tag-version
	git add package.json
	git add package-lock.json
	git add ./docs/changelogs/CHANGELOG_$(V).md
	$(MAKE) ghpages
	git add docs
	$(MAKE) example
	git add public/
	git commit --allow-empty -m "Build $(V)"
	git tag --delete $(V)
	git tag $(V)