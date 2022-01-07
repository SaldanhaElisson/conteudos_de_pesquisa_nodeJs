module.exports = function getFlag(flag){

    let nameflag = process.argv.indexOf(flag) + 1

    return  process.argv[nameflag]
}



