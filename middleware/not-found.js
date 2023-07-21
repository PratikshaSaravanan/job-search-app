const notFoundMiddleware = (req, res) => 
   res.status(404).send('Route does not exist')

 export default notFoundMiddleware





 //not found is used for handling the http request that are not present
 //error-handle is used to handle the error that is already present in the request