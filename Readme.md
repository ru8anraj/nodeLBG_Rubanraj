<h1> Staring server </h1>
<span><strong> npm start </strong></span>

<h1> Running Test </h1>
<span><strong> npm test </strong></span>


<h2> Assignment has 5 routes </h2>
  <ul>
    <li> /sendFile -> outputting file from local directory </li>
    <li> /product -> products two numbers </li>
    <li> /uploadFile -> accepts file content and writes to files folder in the disk </li>
    <li> /stringNonRepeat -> finds the first non repeating element in the string </li>
    <li> /webCrawler -> creates a sitemap for any website given in the query </li>
  </ul>


<h2> /sendFile - GET </h2>
  <ul>
    <li> no input is required </li>
    <li> sends the test image file from the src/files directory </li>
  </ul>

<h2> /product - GET </h2>
  <ul>
    <li> input is passed as url params </li>
    <li> sends the product of two numbers </li>
  </ul>

<h2> /uploadFile - POST </h2>
  <ul>
    <li> input is passed as a form-body and type as file </li>
    <li> received file is stored in the src/files directory </li>
  </ul>

<h2> /stringNonRepeat - POST </h2>
  <ul>
    <li> input is passed as a json body with key as input </li>
      eg:
      {
        input: 'some string'
      }
    <li> returns the first non repeating character from the string </li>
  </ul>

<h2> /webCrawler - POST </h2>
  <ul>
    <li> input is passed in query with key as url </li>
      eg:
      {
        url: 'http://wiprodigital.com'
      }
    <li> creates a sitemap.xml in src/sitemap directory </li>
    <li> <strong> Average wait time for sitemap.xml creation is 30 secs </strong> </li>
  </ul>


<h2> All routes are tested in POSTMAN </h2>
