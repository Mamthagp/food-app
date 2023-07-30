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

# Jest
- Install react testing library - (npm install --save-dev @testing-library/react)
- Install jest - (npm i -D jest)
- Configure jest - (npx jest --init) - it creates jest.config.js fiel for us by asking 5 questions to configure the file ans them accordingly.
    -- [The following questions will help Jest to create a suitable configuration for your project
        ? Would you like to use Typescript for the configuration file? › (y/N)] - No (type n)
        ? Choose the test environment that will be used for testing › - Use arrow-keys. Return to submit.
            1) node
            2) jsdom (browser-like) - select this
        ? Do you want Jest to add coverage reports? … yes
        ? Which provider should be used to instrument code for coverage? › - Use arrow-keys. Return to submit.
           1) v8
           2) babel - select this
        ? Automatically clear mock calls, instances, contexts and results before every test? … yes
    -- Configuration file created at /Users/mamtha/Desktop/Namasthe-React/jest.config.js
- Run the test - (npm run test )
    -- we will get this error As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately. 
- install to avoid the above error (npm i -D jest-environment-jsdom)
- run the test (npm run test) - (testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches)
- create our first test
- create a folder under components named it as __tests__ - (so jest will consider them as test files)
- create a test file inside __tests__ folder (filename.test.js)
- write a test cases
- configure babel (npm install --save-dev babel-jest @babel/core @babel/preset-env)
    .babelrc file
        {
            "presets" : [
                ["@babel/preser-env", {"targets":{"node": "current"}}],
            ]
        }
- write test cases and test
- ignore coverage folder
- jest doesn't understand JSX code so we need to instal (npm i -D @babel/preset-react)
    .babelrc file
        {
            "presets" : [
                ["@babel/preser-env", {"targets":{"node": "current"}}],
                ["babel/preset-react", {"runtime" : "automatic"}]
            ]
        }

# Test Cases
 test("name of the test", function for test cases to execute the code)
