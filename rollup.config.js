import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/main.ts',
  output: [{
    name: 'sdk',
    file: 'dist/sdk.js',
    format: 'umd',
    sourcemap: true
  }, {
    name: 'sdk',
    file: 'dist/sdk.es.js',
    format: 'es',
    sourcemap: true
  }],
  plugins: [
    typescript()
  ]
}
