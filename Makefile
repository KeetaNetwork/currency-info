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
	@echo "  do-type-check - Runs the TypeScript type checker"
	@echo "  do-lint       - Runs the linter"
	@echo "  do-npm-pack   - Builds the project and creates a tarball"
	@echo "  clean         - Removes build artifacts"
	@echo "  distclean     - Removes all build artifacts and dependencies"

test:
	@echo 'not implemented'
	@exit 1

src/data/flags/index.ts: src/data/countries.ts scripts/generate-flags-file.ts node_modules tsdown.config.ts
	npm run tsx -- -e 'import { generateFlagsFile } from "./scripts/generate-flags-file.ts"; generateFlagsFile()'

src/data/flags/flags.css: src/data/flags/index.ts
	@touch src/data/flags/flags.css

do-type-check: node_modules src/data/flags/index.ts src/data/flags/flags.css
	npm run tsc -- --noEmit

do-lint: do-type-check node_modules
	npm run eslint -- --config eslint.config.mjs $(ESLINT_EXTRA_ARGS)

node_modules/.done: Makefile package.json package-lock.json
	rm -rf node_modules
	npm clean-install
	@touch node_modules/.done

node_modules: node_modules/.done
	@touch node_modules

dist/.done: node_modules tsconfig.json tsdown.config.ts scripts/generate-flags-file.ts $(shell find src -type f)
	rm -rf dist
	npm run tsdown
	@touch dist/.done

dist: dist/.done
	@touch dist

do-npm-pack: dist
	npm pack

clean:
	rm -rf dist
	rm -f src/data/flags/index.ts src/data/flags/flags.css
	rm -f keetanetwork-currency-info-*.tgz

distclean: clean
	rm -rf node_modules

.PHONY: all help test do-type-check do-lint do-npm-pack clean distclean
