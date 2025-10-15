function longest(arr, n) 
{

    const stringsWithIndex = arr.map((str, index) => ({
        text: str,
        index: index,
        length: str.length
    }));
   
    stringsWithIndex.sort((a, b) => {
        if (b.length !== a.length) {
            return b.length - a.length;
        }
        return a.index - b.index; 
    });
   
    return stringsWithIndex[n - 1].text;
}