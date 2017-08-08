const expect = require('chai').expect;
const FileManipulator = require('../writer');



describe('FileManipulator',() => {
    let fileManipulator;
    before(()=>{
        fileManipulator = new FileManipulator();
    });

    it('reads the content of  a fle', (done) => {
        fileManipulator.readFile('hello-word.txt', (contents) => {
            expect(contents).to.equal('hello world');
            done();
        });
    });

    it('freaks out if the file does not exist',(done) => {
    let badFunction = () => {
        fileManipulator.readFile('bad-filename.txt', () => {
            // done();
        });
        done();
    };
    expect(badFunction).to.throw();
    });

    it('writes string to a file',(done) => {
        fileManipulator.writeFile('output-file.txt','String Message',() =>{
            console.log('Everything in its wrritee place');
            done();
        })
    });
});