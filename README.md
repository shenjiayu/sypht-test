
# Prerequisites
* Make sure you have lts node.js running on your hardware at least support `es6` features like `export` and `import`
* Also make sure you've run `npm install` to install all required dependencies such as React, Redux, etc
  
# How to run tests
`npm test`

# How to Run it locally
`npm start`

# What to improve

* Animations such as the loading bar could be added to improve user experiences while uploading files
* The file uploading flow could be improved
* More charts could be introduced based on the results returned from the endpoint
* Currently all analysied results are saved in SessionStorage which can be stored in some proper database like MySQL to persist the data
* More test coverage could be achieved (only tests for redux actions/reducers were covered)
* ABN verifications could be introduced (but the registration of the ABN lookup web services is still undergoing)
* Error boundary as suggested can be introduced to avoid complete page failure
* Error handling could be implemented more to cover all cases. (currently only the 401 returned by the endpoint was covered)

# Suggestions on endpoints
* Batch uploading should be implemented for uploading multiple files and retrieving results for multiple files (don't know if it is because of the limitation of the free trail account)
