process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
            case '/ver':
                var version = process.versions.node;
                process.stdout.write(version + '\n');
                break;
            case '/lang':
                var language = process.env.LANG;
                process.stdout.write(language + '\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});
