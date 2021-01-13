const convertVertical = letters => {

    let vertical = [];
      
      for (const row in letters[0]) { //0,1
        let string = '';
        for (const col in letters) { //0,1,2
          string +=(letters[col][row])
        }
        vertical.push(string)
      } 
    
      return vertical
    }

const wordSearch = (letters, word) => { 
    if (!word) return false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    };

    const verticalJoin = convertVertical(letters);
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    };
    return false
}

module.exports = wordSearch

// ['A', 'W', 'C'],  ***ROW1
// ['S', 'E', 'I'],  ***ROW2
// ['Y', 'F', 'C'],
// ['N', 'H', 'C']


//DIAGONAL FROM TOP RIGHT TO BOTTOM LEFT  
//EXPCTED RESULT = ['A','WS','CEY','IF','C']
//...foreach n in matrix[0]
//'A'  ----   'matrix[0][0]',    n = 0
//'WS' ---- matrix[0][1] + matrix[1][0]' 'WS' n = 1
//'CEY' ---- matrix[0][2] + matrix[1][1] + matrix [2][0]'  n = 2 ... 

// matrix[1][2] + matrix[2][1] + matrix[3][0]     'IFN'
// matrix[2][2] + matrix[3][1]                  'CH'
// matrix[3][2]                                 'C'


//loop first array
//loop second array
//if the index of the second array is same as first array
//compare the string to word
//if not then add matrix[i - i][j + 1]