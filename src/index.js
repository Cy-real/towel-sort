module.exports = function towelSort (matrix) {
  let arr = [];
    let counter =0;
    for(let i=0;i<matrix[i].length;i++)
    {
        for(let j=0;j<matrix[j].length;j++)
        {
            arr[counter] = matrix[i][j];
            counter++;
        }
    }
    
    return arr;
}
