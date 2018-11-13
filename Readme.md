<h1> Staring server </h1>
<span> npm start </span>

<h1> Running Test </h1>
<span npm test </span>


<h2> Assignment has 4 routes </h2>
  <ul>
    <li> /sendFile -> outputting file from local directory </li>
    <li> /product -> products two numbers </li>
    <li> /uploadFile -> accepts file content and writes to files folder in the disk </li>
    <li> /stringNonRepeat -> finds the first non repeating element in the string </li>
  </ul>


<h2> /sendFile - GET </h2>
  <ul>
    <li> no input is required </li>
    <li> sends the test image file from the files folder </li>
  </ul>

<h2> /product - GET </h2>
  <ul>
    <li> input is passed as url params </li>
    <li> sends the product of two numbers </li>
  </ul>

<h2> /uploadFile - POST </h2>
  <ul>
    <li> input is passed as a form-body and type as file </li>
    <li> received file is stored in the files folder </li>
  <ul>

<h2> /stringNonRepeat - POST </h2>
  <ul>
    <li> input is passed as a json body with key as input </li>
      eg:
      {
        input: 'some string'
      }
      <li> returns the first non repeating character from the string </li>\
    </ul>


<h2> All routes are tested in POSTMAN </h2>
