module.exports = {
    components: './src/components',
    outputPath: './dist/playroom',
  
    // Optional:
    title: 'My Awesome Library',
    // themes: './src/themes',
    //frameComponent: './src/FrameComponent.js',
    widths: [320, 375, 768, 1024],
    port: 9000,
    openBrowser: true,
    exampleCode: `
      <Button>
        Hello World!
      </Button>
    `,
    webpackConfig: () => ({
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: __dirname,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /(?!\.css)\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['babel-plugin-transform-class-properties']
                        }
                    }
                },
                {
                    test: /\.css\.js$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[name]__[local]___[hash:base64:7]',
                                importLoaders: 2
                            }
                        },
                        {
                            loader: 'css-in-js-loader'
                        },
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: ['babel-plugin-transform-class-properties']
                            }
                        }
                    ]
                }
            ]
        }
    })
  };