NPM=npm

.PHONY: version
version:
	git tag $(V)
	./scripts/changelog.sh
	$(NPM) version $(V) --no-git-tag-version
	git add package.json
	git add package-lock.json
	git add ./docs/changelogs/CHANGELOG_$(V).md
	git add docs
	git commit --allow-empty -m "Build $(V)"
	git tag --delete $(V)
	git tag $(V)
