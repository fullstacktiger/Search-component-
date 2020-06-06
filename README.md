## Search-component

Built a client-search component at the root route.
Made it a sentence and an inline input component, and if input is blank and hasn't changed for 5 seconds, switch the sentence to a differenct sentence, with css transition.
If input value length>0, show search button and do not switch sentence.
If Search button click, this project is used "await axios.get('http://localhost:5000/api/v1/restaurants/', {params: {filter}})"


Quick start
 npm install
 npm run start:dev
 cd web
 npm install
 npm start
