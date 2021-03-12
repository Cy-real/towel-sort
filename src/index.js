module.exports = function towelSort (matrix) {
  let arr = [];
    for(let i=0;i<matrix[i].length;i++)
    {
        for(let j=0;j<matrix[j].length;j++)
        {
            arr.push(matrix[i][j]);
        }
    }
    
    return arr;
}
