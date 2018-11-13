Assignment has 4 routes
  * /sendFile -> outputting file from local directory
  * /product -> products two numbers
  * /uploadFile -> accepts file content and writes to files folder in the disk
  * /stringNonRepeat -> finds the first non repeating element in the stringLogic


/sendFile - GET
  -> no input is required
  -> sends the test image file from the files folder

/product - GET
  -> input is passed as url params
  -> sends the product of two numbers

/uploadFile - POST
  -> input is passed as a form-body and type as file
  -> received file is stored in the files folder

/stringNonRepeat - POST
  -> input is passed as a json body with key as input
      eg:
      {
        input: 'some string'
      }
  -> returns the first non repeating character from the string


** All routes are tested in POSTMAN
