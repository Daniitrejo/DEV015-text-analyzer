const analyzer = {
  getWordCount: (text) => {  
    const words = text.trim ().split(/\s+/).filter(word => word.length >0);
    const wordCount = words.length;
    return (wordCount);

    }, 
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
  getcharactercount:(text) =>{
    const characterCount = text.length;
   return (characterCount);
  },
      //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

  getCharacterCountExcludingSpac : (text) => {
    const characters = text.replace(/\s+/g, '');
    const characterEs = characters.length;
    return (characterEs);
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    if (words.lenght === 0);
    const totalLength = words.reduce((sum, word)=> sum+ word.length, 0);
    const averageWord =(totalLength / words.length).toFixed(2); 
    return (averageWord);
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g) || [];
    const numberCount =numbers.length;
    return (numberCount);

    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g) ||[];
    const numberSum =numbers.reduce((sum,num) => sum + parseInt(num, 10), 0);
    return (numberSum);
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
  
  };


export default analyzer;
