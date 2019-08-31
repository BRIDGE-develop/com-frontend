module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    verbose: true,
    modulePaths: ['<rootDir>/src'],
    globals: {
        'ts-jest': {
            babelConfig: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        },
    },
};
