function ipv4Parser(ip, mask)
{
  let ipParts = ip.split('.').map(Number);
  let maskParts = mask.split('.').map(Number);
  let networkAddress = [];
  let hostAddress = [];
  
  for (let i = 0; i < 4; i++) {
    let networkPart = ipParts[i] & maskParts[i];
    let hostPart = ipParts[i] & (~maskParts[i] & 255);
    networkAddress.push(networkPart);
    hostAddress.push(hostPart);
  }
  
  let networkString = networkAddress.join('.');
  let hostString = hostAddress.join('.');
  return [networkString, hostString];
}