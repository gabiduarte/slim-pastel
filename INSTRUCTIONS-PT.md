# Slim webpack boilerplate

## O que tem:
- Webpack
    - Dev server com hot reload
    - Minify JS e HTML
- React
- Redux
- Sass
- Jest

## Pra fazer na mão:

### Pre-webpack
1. Gerar package.json
```
npm init -y
```

2. Configurar o .gitignore para excluir os seguintes arquivos:

```
node_modules/
.DS_Store
*.log
dist/
```
### Webpack
3. Baixar o webpack, webpack-cli e o dev-server

```
npm i --save-dev webpack webpack-cli webpack-dev-server
```

4. Adicionar os scripts no package.json

```
"scripts" : {
	"start": "webpack-dev-server --mode development --open --hot",
	"build": "webpack --mode production"
}
```

> O próprio mode de production do webpack se responsabiliza por minificar o JS.

### React
5. Baixar o react e react-dom

```
npm i --save react react-dom
```

6. Baixar as dependências do Babel

```
npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react
```

> **babel-core:** Transforma o codigo ES6 em ES5
> 
> **babel-loader:** helper pra transformar as dependencias do JS.
> 
> **babel-preset-env:** Escolhe quais plugins e polyfills usar dependendo do browser support.
> 
> **babel-preset-react:** preset para os plugins de React.

7. Criar arquivo de config do webpack:

```
module.exports = {
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}]
	}
}
```

8. Criar um arquivo chamado `.babelrc` para adicionar as opções do loader

```
{ "presets": ["env", "react"] }
```

9. Crie um arquivo index.js para renderizar um componente do React

```
import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => (
	<div>Hello React</div>
)

ReactDOM.render(<Index/>, document.getElementById('root'));
```

10. Crie um arquivo index.html dentro de src para adicionar o elemento com id `root`

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello React</title>
</head>
<body>
  <section id="root"></section>
</body>
</html>
```

### HTML (minifica e adiciona scripts)
11. No terminal, instalar o html-webpack-plugin

```
npm i --save-dev html-webpack-plugin
```

12. Atualize o webpack.config.js

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

module.exports = {
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}]
	},
	
	plugins: [htmlPlugin]
};
```

13. Rode `npm run start` e veja se foi criada uma pasta dist com o index.html e um main.js. 
> Se abrir o dist/index.html, você deve ver Hello React na página.

### SASS/CSS
14. Instale as dependências do sass/css:

```
npm i --save-dev sass-loader node-sass style-loader extract-text-webpack-plugin css-loader 
```

> Extract Text Webpack Plugin precisa ser instalado na versão `^4.0.0-beta.0` por questões de compatibilidade com o webpack 4.

15. Atualize o arquivo de configuração do webpack

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
});

const cssPlugin = new ExtractTextPlugin('main.css');

module.exports = {
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}, {
			test: /\.(s*)css$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}]
	},
	
	plugins: [htmlPlugin, cssPlugin]
};

```

### Jest

16. Instale o Jest

```
npm i --save-dev jest
```

17. Adicione o script de test no package.json

```
 "scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production",
    "test": "jest"
  }
  
```

18. Depois de criar o arquivo de teste e implementação, veja a mágica funcionar com

```
npm run test
```
### Redux
19.Instale o Redux

```
npm i --save redux react-redux
```