# React🚀

# Parcel
- Dev Build
- Local Server
- HMP - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking - remove unused files/codes
- Different dev and prod bundles 

# Redux Toolkit
    1) Install Redux toolkit and react-redux
    - npm install @reduxjs/toolkit
    - npm install react-redux
    2) Build our store
    3) zconnect our store to our app
    4) We will create cart slice
    5) Dispatch action
    6) pass action to the reducer function
    7) selector


# React-testing library

## TYpes of tetsing
- Unit Testing
- Integration testing
- End to End testing (e2e)

# Setting up tetsting in our app
- Install react testing library 
    - (npm install --save-dev @testing-library/react)
- Install jest 
    - (npm i -D jest)
- Instal jest with babel - babel dependencies
    - (npm install --save-dev babel-jest @babel/core @babel/preset-env)
- configure babel 
    - create jest.config.js file and add the below code
        {
            "presets" : [
                ["@babel/preser-env", {"targets":{"node": "current"}}],
            ]
        }
- Configure Parcel config file to disable default babel transpilation
    - create .parcelrc file and add the below code inside the file.
        {
            "extends": "@parcel/config-default",
            "transformers": {
                "*.{js,mjs,jsx,cjs,ts,tsx}": [
                "@parcel/transformer-js",
                "@parcel/transformer-react-refresh-wrap"
                ]
            }
        }
         
- Configure jest - (npx jest --init) - it creates jest.config.js fiel for us by asking 5 questions to configure the file ans them accordingly.
    -- [The following questions will help Jest to create a suitable configuration for your project
        ? Would you like to use Typescript for the configuration file? › (y/N)] - No (type n)
        ? Choose the test environment that will be used for testing › - Use arrow-keys. Return to submit.
            1) node
            2) jsdom (browser-like) - ✅ select this
        ? Do you want Jest to add coverage reports? … yes
        ? Which provider should be used to instrument code for coverage? › - Use arrow-keys. Return to submit.
           1) v8
           2) babel -  ✅select this
        ? Automatically clear mock calls, instances, contexts and results before every test? … yes
    -- Configuration file created automatically at /Users/mamtha/Desktop/Namasthe-React/jest.config.js
- install jsdom library
    - npm i -D jest-environment-jsdom

- Run the test - (npm run test )

- run the test (npm run test) - (testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches)
- create our first test
- create a folder under components named it as __tests__ - (so jest will consider them as test files)
- create a test file inside __tests__ folder (filename.test.js)
- write a test cases
- ignore coverage folder in .gitignore file
- jest doesn't understand JSX code so we need to instal (npm i -D @babel/preset-react)
    .babelrc file
        {
            "presets" : [
                ["@babel/preser-env", {"targets":{"node": "current"}}],
                ["babel/preset-react", {"runtime" : "automatic"}]
            ]
        }
- install @testing-library/jest-dom
    npm i -D @testing-library/jest-dom


# Test Cases
 test("name of the test", function for test cases to execute the code)
