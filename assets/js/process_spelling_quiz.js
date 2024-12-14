const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const q1 = urlParams.get('q1')
const q2 = urlParams.get('q2')
const q3 = urlParams.get('q3')
const q4 = urlParams.get('q4')
const q5 = urlParams.get('q5')
const q6 = urlParams.get('q6')
const q7 = urlParams.get('q7')
const q8 = urlParams.get('q8')
const correct = 0
const score = 0
const rank = 0
const checked = 0
const impossiblecorrect = 0

if (q1.toLowerCase() == "computer") {
    correct += 1
    score += 0.5
    checked += 1
}

if (q2.toLowerCase() == "bicycle") {
    correct += 1
    score += 1
    checked += 1
}

if (q3.toLowerCase() == "pacifist") {
    correct += 1
    score += 1.25
    checked += 1
}

if (q4.toLowerCase() == "buoy") {
    correct += 1
    score += 2
    checked += 1
}

if (q5.toLowerCase() == "simplification") {
    correct += 1
    score += 1.75
    checked += 1
}

if (q6.toLowerCase() == "optimistic") {
    correct += 1
    score += 1.25
    checked += 1
}

if (q7.toLowerCase() == "synagogue") {
    correct += 1
    score += 2.25
    checked += 1
}

if (q8.toLowerCase() == "anthropomorphize") {
    correct += 1
    score += 4
    checked += 1
    impossiblecorrect = 1
}

if (checked == 8) {
    if (correct === 1 || correct === 2) {
        rank = 1
    } else {
        if (correct === 3 || correct === 4) {
            rank = 2
        } else {
            if (correct === 5 || correct === 6) {
                rank = 3
            } else {
                if (correct === 7) {
                    rank = 4
                } else {
                    if (correct === 8) {
                        if (impossiblecorrect === 1) {
                            rank = 5
                        }
                    } else {
                        if (correct === 0) {
                            rank = 0
                        }
                    }
                }
            }
        }
    }
} else {
    console.log('Not Checked All... Checking Again...')
    window.location.reload()
}

const results = "https://stuffzez.github.io/learn/spelling/quiz_results?score=" + score + "&rank=" + rank + "&correct=" + correct + "&impossible=" + impossiblecorrect

window.location.replace(results)