# Default target
all: dist

# This target provides a list of targets.
help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  all           - Builds the project"
	@echo "  dist          - Builds the project"
	@echo "  test          - Runs the test suite"
	@echo "  do-lint       - Runs the linter"
	@echo "  do-npm-pack   - Builds the project and creates a tarball"
	@echo "  clean         - Removes build artifacts"
	@echo "  distclean     - Removes all build artifacts and dependencies"

test:
	@echo 'not implemented'
	@exit 1

do-lint: node_modules
	npm run eslint -- --config eslint.config.mjs

node_modules/.done: Makefile package.json package-lock.json
	rm -rf node_modules
	npm clean-install
	@touch node_modules/.done

node_modules: node_modules/.done
	@touch node_modules

dist/.done: node_modules tsconfig.json tsdown.config.ts $(shell find src -type f)
	rm -rf dist
	npm run tsdown
	@touch dist/.done

dist: dist/.done
	@touch dist

do-npm-pack: dist
	npm pack

clean:
	rm -rf dist
	-rm keetanetwork-currency-info-*.tgz

distclean: clean
	rm -rf node_modules

.PHONY: all help test do-lint do-npm-pack clean distclean
