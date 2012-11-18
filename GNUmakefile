.DEFAULT_GOAL :=

NODE_MODULES := ./node_modules/

BEM := $(NODE_MODULES).bin/bem
NPM := npm

ifneq (,$(findstring B,$(MAKEFLAGS)))
	BEM_FLAGS := --force
endif

all:: make

%:: $(BEM)
	$(if $(findstring GNUmakefile,$@),,$(BEM) make $@ $(BEM_FLAGS))

.PHONY: server
server:: $(BEM) make
	@node app.js

.PHONY: make
make:: $(BEM)
	@$(BEM) make

$(BEM):: $(NODE_MODULES)

$(NODE_MODULES)::
	$(debug ---> Updating npm dependencies)
	@$(NPM) install

.PHONY: clean
clean::
	$(BEM) make -m clean
