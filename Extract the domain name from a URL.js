function domainName(url) {
    url = url.startsWith('http') 
        ? url.slice(url.indexOf('//') + 2) 
        : url;
    url = url.startsWith('www.') ? url.slice(4) : url;
    return url.split('.')[0];
}