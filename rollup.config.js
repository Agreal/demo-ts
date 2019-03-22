import typescript from 'rollup-plugin-typescript2';
const pkg = require('./package');
export default {
  input: 'src/index.ts',
  output: [
    {name: 'sdk', file: pkg.main, format: 'umd', sourcemap: true},
    {file: pkg.module, format: 'es', sourcemap: true}
  ],
  plugins: [
    typescript()
  ],
  watch: {
    include: 'src/**',
  }
}
