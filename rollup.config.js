import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: {
    format: 'es',
    file: './dst/esm/index.js',
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfig: 'tsconfig.json',
    })
  ],
}
