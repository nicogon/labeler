const colors = [
    'C1A7FF',
    'C2CBFF',
    'C7FCBA',
    'FDFEC9',
    'FFD8B6',
    'FEBCC2'
];

const getHash = (input) => {
    let hash;
    for (let i = 0; i < input.length; i++) {
        hash = ((hash << 5) - hash) + input.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

const getColor = (string) => {
    if (! string) {
        return 'none';
    }
    return '#' + colors[getHash(string) % 6];
}

export default {getColor};