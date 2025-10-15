function solution(str)
{
  
    let r = [];
    str = str.length % 2 !== 0 ? str + "_" : str;
    
    let i = 0;
    while (i < str.length) {
        r.push(str[i] + str[i + 1]);
        i += 2;
    }
    
    return r;
}