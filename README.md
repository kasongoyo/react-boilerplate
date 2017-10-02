# React Boilerplate
React Boilerplate.

## Project Structure
```
.
├── README.md
├── config
│   ├── jest
│   │   ├── fileMock.js
│   │   └── fileTransform.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
├── development.js
├── package.json
├── production.js
├── public
├── src
│   ├── index.js
│   ├── components
│   │   ├── App.js
│   │   ├── App.scss
│   │   └── App.test.js
│ 
└── yarn.lock
```

- `development.js`  
Server in dev environment  
- `production.js`  
Server in production environment    
- `config/webpack.config.dev.js`  
Webpack development configuration  
- `config/webpack.config.prod.js`  
Webpack production configuration 


## Usage

> **First install all the dependencies for development**

```sh
yarn install && bower install
```

> **Launch application in development mode**

```sh
yarn dev
```

> **Testing Application**

```sh
yarn test
```

> **Build application**

```sh
yarn build
```

> **Run application**
```sh
yarn start
```

> **Customization**

 - `package.json`     
 Update package.json as per your requirement
 - README.md        
 Update this readMe as per your requirement
 - `Git`        
 run        
 `$ rm -rf .git`        
 followed by        
 `$ git init` to start your new git history         
 or run         
 `$ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git` to continue with existing git history but on your own repo

> **Extras**
- Best fix of `yarn.lock` merge conflict
    ```
    $ git checkout <previous commit> -- yarn.lock
    $ yarn install
    ```
