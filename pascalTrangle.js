// Author: Prashant Hedaoo

var getTerm = function(row, col, tri) {
    if(row === 0 || col === 0 || col === row) {
        return 1;
    }
    return tri[row-1][col-1] + tri[row-1][col];
};

// Returns two dimentional array with n rows.
var pascalT = function(n) {
    var pTriangle = [];

    for (var row=0; row<n; row++) {
        var res = [];
        for (var col=0; col<=row; col++) {
            res.push( getTerm(row,col, pTriangle) );
        }
        //console.log(res);
        pTriangle[row] = res;
    }

    return pTriangle;
};

// console.log( pascalT(7) ); // Print the Array
