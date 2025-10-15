function whatCentury(year) 
{
  let g = Number(year);
  let c = Math.ceil(g / 100);
  
  if (c % 100 === 11 || c % 100 === 12 || c % 100 === 13) {
    return c + 'th';
  }
  
  switch (c % 10) {
    case 1: return c + 'st';
    case 2: return c + 'nd';
    case 3: return c + 'rd';
    default: return c + 'th';
  }
}