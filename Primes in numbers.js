function primeFactors(n)
{
    let result = '';
    
    for (let d = 2; d * d <= n; d++) 
    {
        let count = 0;
        
        while (n % d === 0) {
            count++;
            n /= d;
        }
        
        if (count > 0) 
        {
            result += count === 1 ? `(${d})` : `(${d}**${count})`;
        }
    }

    if (n > 1) 
    {
        result += `(${n})`;
    }
    return result;
}