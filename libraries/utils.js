var resultpath = undefined;

export var get_current_testresult_path = () => {
    return resultpath;
}

var set_current_testresult_path = (path) => {
    return resultpath = path;
}

export var get_time_stamp = () => {
    let currentdate = new Date();
    let datetime = (currentdate.getMonth() + 1) + "-"
        + currentdate.getDate() + "-"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + "-"
        + currentdate.getMinutes() + "-"
        + currentdate.getSeconds();

    let testresultpath = './testresults/';
    let currenttestresultpath = testresultpath + datetime;

    set_current_testresult_path(currenttestresultpath.toString());

    return currenttestresultpath;
}


