
function superbowlWin(record) {
    for (const key of record){
        if (key["result"]==='W'){
            return key["year"]
        }
    }
}
record.isFind(superbowlWin)