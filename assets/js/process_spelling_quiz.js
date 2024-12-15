const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const q1 = urlParams.get('q1');
const q2 = urlParams.get('q2');
const q3 = urlParams.get('q3');
const q4 = urlParams.get('q4');
const q5 = urlParams.get('q5');
const q6 = urlParams.get('q6');
const q7 = urlParams.get('q7');
const q8 = urlParams.get('q8');

// Change const to let so these variables can be updated
let correct = 0;
let score = 0;
let rank = 0;
let checked = 0;
let impossiblecorrect = 0;
let accesscode = 0;
let finalcode = 0;

if (q1.toLowerCase() == "computer") {
    correct += 1;
    score += 0.5;
    checked += 1;
}

if (q2.toLowerCase() == "bicycle") {
    correct += 1;
    score += 1;
    checked += 1;
}

if (q3.toLowerCase() == "pacifist") {
    correct += 1;
    score += 1.25;
    checked += 1;
}

if (q4.toLowerCase() == "buoy") {
    correct += 1;
    score += 2;
    checked += 1;
}

if (q5.toLowerCase() == "simplification") {
    correct += 1;
    score += 1.75;
    checked += 1;
}

if (q6.toLowerCase() == "optimistic") {
    correct += 1;
    score += 1.25;
    checked += 1;
}

if (q7.toLowerCase() == "synagogue") {
    correct += 1;
    score += 2.25;
    checked += 1;
}

if (q8.toLowerCase() == "anthropomorphise") {
    correct += 1;
    score += 4;
    checked += 1;
    impossiblecorrect = 1;
}

if (checked == 8) {
    if (correct === 1 || correct === 2) {
        rank = 1;
    } else {
        if (correct === 3 || correct === 4) {
            rank = 2;
        } else {
            if (correct === 5 || correct === 6) {
                rank = 3;
            } else {
                if (correct === 7) {
                    rank = 4;
                } else {
                    if (correct === 8) {
                        if (impossiblecorrect === 1) {
                            rank = 5;
                        }
                    } else {
                        if (correct === 0) {
                            rank = 0;
                        }
                    }
                }
            }
        }
    }
} else {
    console.log('Not Checked All... Checking Again...');
    window.location.reload();
}

if (score >= 0 || score === 0.25 || score === 0.75 || score === 0.5) {
    accesscode += 1 // 1
    if (score >= 3) {
        accesscode += 1 // 2
        if (score >= 6) {
            accesscode += 1 // 3
            if (score === 9) {
                accesscode += 1 // 4
            }
        }
    }
}

if (accesscode === 1) {
    finalcode = 1001
} else {
    if (accesscode === 2) {
        finalcode = 2001
    } else {
        if (accesscode === 3) {
            finalcode = 3001
        } else {
            if (accesscode === 4) {
                finalcode = 4001
            }
        }
    }
}

const results = "https://stuffzez.github.io/learn/spelling/quiz_results?score=" + score + "&rank=" + rank + "&correct=" + correct + "&impossible=" + impossiblecorrect + "&accesscode=" + finalcode;

window.location.replace(results);