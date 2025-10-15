function toWeirdCase(string){
    
    let words = string.split(' ');
    let result = [];
    
      for (let i = 0; i < words.length; i++) 
      {
        let word = words[i];
        let newWord = '';
       
        for (let j = 0; j < word.length; j++) 
        {
            let letter = word[j];
            
            if (j % 2 === 0) 
            {
                newWord += letter.toUpperCase();
            } else 
            {
                newWord += letter.toLowerCase();
            }
        }
        
        result.push(newWord);
    }
    return result.join(' ');
}