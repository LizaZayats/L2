function wave(str){
  
    let result = [];
    
    for (let i = 0; i < str.length; i++) 
    {
        if (str[i] === ' ') 
        {
            continue;
        }
        
        let waveString = '';
        for (let j = 0; j < str.length; j++) 
        {
            if (j === i) 
            {
                waveString += str[j].toUpperCase();
            } else {
                waveString += str[j];
            }
        }
        
        result.push(waveString);
    }
    
    return result;
}