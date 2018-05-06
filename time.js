
    const timeObj = {
        label: '',
        startTime: ''
    }

    const startTime = label => {
        timeObj.label = label;
        timeObj.startTime = new Date("2018-01-26");
        console.log(timeObj)
    }

    const getTime = label => {
        console.log(timeObj)
        if(timeObj.label === label)
        return new Date().getTime() - timeObj.startTime.getTime();
    }

module.exports = {
    startTime,
    getTime
}