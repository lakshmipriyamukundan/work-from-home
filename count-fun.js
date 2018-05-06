const countObj = {label: '', count: 0, caller: ''};
const countFun = (x) =>{

    let callerName;
    try {
        throw new Error();
    } catch (e) {
        let re = /(\w+)@|at (\w+) \(/g;
        let st = e.stack 
        let m = re.exec(st);
        callerName = m[1] || m[2];
    }
    console.log(callerName)
    if(countObj.caller !== callerName){
        countObj.caller = callerName;
        countObj.count = 0;
    }
    if(countObj.label === x){
        countObj.count++;
        console.log("hhhhhh")
        return countObj.count;
    }
    countObj.label = x;
    countObj.count++;
    console.log("cjdsvhjd")
    return countObj.count;
}

module.exports = {
    countFun
}