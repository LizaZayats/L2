function expandedForm(num) 
{
    let numStr = num.toString();
    let result = [];
    
    for (let i = 0; i < numStr.length; i++) 
    {
      
        let d = parseInt(numStr[i]);
        
        if (d !== 0) {
            let z = '0'.repeat(numStr.length - i - 1);
            result.push(d + z);
        }
    }
    
    return result.join(' + ');
}