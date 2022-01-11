const findMinMax = (numbers = []) => {
  if(!(numbers && numbers.length)) return { min: -1, max: -1 }

  const values = { min: 100000, max: -1}

  for ( const number of numbers ){
    if(number < values.min ){
      // 1
    }

    if(number > values.max){
      // 2
    }
  }

  return values
}

/* answers 
a)
  1. values.max = number
  2. values.min = value
b)
  1. values.min = number
  2. values.max = number
c)
  1. values.max = number - value.max
  2. values.min = number - value.min
d)
  1. values.min = value.min - number
  2. values.max = value.max - number

/*

module.exports = findMinMax
