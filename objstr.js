function buildUser(first,last) {
    var fullname = first + " " + last;
    return {first:first,last:last,fullname};
}

function buildUser2(first,last) {
    var fullname = first + " " + last;
    return {first,last,fullname};
}

{first,last,fullname} = buildUser("carlo","Khanati");

console.log({first,last,fullname});
console.log(buildUser2("carlo","Khanati"));

function buildUser3(first,last,postCount){
    let fullname = first + " " + last;
    const ACTIVE_POST_COUNT = 10;
    return {first, last, fullname, isActive: function() { return postCount >= ACTIVE_POST_COUNT } }
}

let x = buildUser3("carlo","Khanati",3);

function buildUser4(first,last,postCount){
    let fullname = first + " " + last;
    const ACTIVE_POST_COUNT = 10;
    return {first, last, fullname, isActive() {return postCount >= ACTIVE_POST_COUNT} }
}

console.log(buildUser4("carlo","Khanati",3));