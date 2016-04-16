native:
	clang -framework GLUT -framework OpenGL -Wno-deprecated main.c -o cube

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
