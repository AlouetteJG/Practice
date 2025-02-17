var studentScores = {};
studentScores["Bob"] = 80;
studentScores["Lola"] = 100;
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}
