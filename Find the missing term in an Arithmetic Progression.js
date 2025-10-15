function findMissing(list) 
{  
  let p1 = list[1] - list[0];
  let p2 = list[2] - list[1];
  
  let p = Math.abs(p1) < Math.abs(p2) ? p1 : p2;
  
  for (let i = 0; i < list.length - 1; i++) 
  {
      if (list[i + 1] - list[i] !== p) 
      {
          return list[i] + p;  
      }
  }
}