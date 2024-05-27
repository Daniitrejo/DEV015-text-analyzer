const analyzer = {  
  getWordCount: (text) => {  
    const words = text.trim ().split(/\s+/).filter(word => word.length >0);
    return words.lenght;
    } 
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  }
  getcharactercount:(text) =>{
   return text.length; 
  }
      //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

  getCharacterCountExcludingSpac : (text) => {
    const characters = text.replace(/\s+/g, '');
    return characters.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  }
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },


export default analyzer;
