process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function(data) {
    input_ += data;
});

function group_Sol(N, a) {
    let result = [];
    let control = {};
    let ordered = [];
    
    // Append values and frequencies in a dictionary
    a.forEach(e => {
        if (e in control)
            ++control[e];
        else {
            control[e] = 1;
            result.push(e);
        }
    })

    let numbers = Object.keys(control).map(n => parseInt(numbers));
    let freq = Object.values(control);

    for (let i in numbers) {
        ordered.push(numbers[i], freq[i]);
    }

    for (let i = 0; i < result.length; i++) {
        // Sort by frecuency
        if (control[result[i]] < control[result[i + 1]]) {
            aux = result[i];
            result[i] = result[i + 1];
            result[i + 1] = aux;
        }

        // Sort by value
        if (control[result[i]] == control[result[i + 1]]) {
            console.log(result[i] + ' ' + result[i+1]);
            if (result[i] < result[i + 1]) {
                aux = result[i];
                result[i] = result[i + 1];
                result[i + 1] = aux;
            }
            console.log(result[i] + ' ' + result[i+1]);
        }
    }

    return result;
}

process.stdin.on('end', function() {
    input_ = input_.trim().split('\n').map(string => {
        return string.trim();
    });

    var N = parseInt(input_[0]);
    var a = input_[1].split(" ").map(x => parseInt(x));

    var out_ = group_Sol(N, a);
    process.stdout.write(out_.join(' '));

    process.exit();

});