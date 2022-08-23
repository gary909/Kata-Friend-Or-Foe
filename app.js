function friend(friends) {
    let myArr = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            myArr.push(friends[i]);
        }
    }
    return myArr;
}


console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); // ["Ryan"]
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])); // ["Jimm", "Cari", "aret"]
console.log(friend(["Love", "Your", "Face", "1"])); // ["Love", "Your", "Face"]