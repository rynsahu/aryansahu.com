import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";

export default {
    input: "src/hydrate.jsx",
    output: {
        dir: "dist",
        format: "esm",
        // name: "App",
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify("production"),
            preventAssignment: true,
        }),
        nodeResolve({
            extensions: ['.js', 'jsx']
        }),
        commonjs(),
        babel({
            presets: ['@babel/preset-react'],
            babelHelpers: 'bundled',
            extensions: ['.jsx'],
            exclude: 'node_modules/**'
        }),
    ]
}