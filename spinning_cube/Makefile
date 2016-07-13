kernel := $(shell sh -c 'uname -s 2>/dev/null || echo not')

ifeq ($(kernel),Linux)
    CLANG_ARGS = -lGL -lGLU -lglut
endif
ifeq ($(kernel),Darwin)
    CLANG_ARGS = -framework GLUT -framework OpenGL -Wno-deprecated
endif

native:
	clang $(CLANG_ARGS) main.c -o cube

asm:
	emcc -O2 -s LEGACY_GL_EMULATION=1 -o cube.html main.c

wasm:
	emcc -O2 -s LEGACY_GL_EMULATION=1 -s BINARYEN=1 -s 'BINARYEN_METHOD="native-wasm"' -s 'BINARYEN_SCRIPTS="spidermonkify.py"' main.c -o cube-wasm-only.html

wasm-asm:
	emcc -O2 -s LEGACY_GL_EMULATION=1 -s BINARYEN=1 -s 'BINARYEN_METHOD="native-wasm,asmjs"' -s 'BINARYEN_SCRIPTS="spidermonkify.py"' main.c -o cube-wasm-asm.html 

wasm-interp:
	emcc -O2 -s LEGACY_GL_EMULATION=1 -s BINARYEN=1 -s 'BINARYEN_METHOD="native-wasm,interpret-binary"' -s 'BINARYEN_SCRIPTS="spidermonkify.py"' main.c -o cube-wasm-wasminterp.html

clean:
	rm -f cube*
