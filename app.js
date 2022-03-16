function palindrome(str) {
    // collect the string with oute any spaces or speciale charachtars in an array:
    let pureStrInArr = str.match(/[a-z0-9]+/ig);

    // collect the array items in one string called (pureStr):
    let pureStr = "";
    for (let i of pureStrInArr)
    {
        pureStr += i;
    }

    // Change the text to be in the same case:
    pureStr = pureStr.toLowerCase();

    //reverse the pure string: 
    let reversPureStr = "";
    for (let i = pureStr.length - 1; i > -1; i--)
    {
        reversPureStr += pureStr[i];
    }

    if (pureStr === reversPureStr)
    {
        return true;
    }
    else
    {
        return false;
    }

    
  }
  
  palindrome("Input-tupni");