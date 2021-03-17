let seq = 0;

const UIDGenerator = {
    generate() {
        return (Date.now() * (2 ** 16))
            + ((seq++ % (2 ** 8)) * (2 ** 8))
            + Math.floor(Math.random() * (2 ** 8));
    },
    UID2Date(uid: number) {
        return new Date(Math.floor(uid / (2 ** 16)));
    }
};

export default UIDGenerator;
