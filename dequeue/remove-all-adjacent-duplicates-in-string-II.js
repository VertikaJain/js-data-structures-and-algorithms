// Brute force time limit exceeeded.

var removeDuplicates = function(currStr, k) {
    let c=1,tempStr="";
    for(let i=0;i<currStr.length;i++){
        if((i+1<currStr.length) && (currStr[i]===currStr[i+1])){
            c+=1;
            if(c===k){
                c=1;
                i++;
            }
        }
        else{
            for(let j=0;j<c;j++){
                tempStr+=currStr[i];
            }
            c=1;
        }
        if(i+1===currStr.length && tempStr.length!==currStr.length){
            
            currStr=tempStr;
            i=-1;
            c=1;
            tempStr="";
        }
        
    }
    return tempStr;
};