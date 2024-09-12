export function isAdult(string, flag){
  switch(string){
    case 'male':
      return flag ? '👨' : '👦'
    case 'female':
      return flag ? '👩' : "👧"
    default: 
      return ""
  }
}

export function captializeFirstLetter(string){
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase()
}