const fs = require('fs');


class FileManipulator{
    readFile(fileName, doSomethingLaterWith){
        fs.readFile(fileName, (err, buffer)=>{
            if (err){
                throw new Error('Could not read file');
                return;
            }
            let fileContentsAsString= buffer.toString();
            doSomethingLaterWith(fileContentsAsString);
        });
    }
    writeFile(fileName, someTextForTheFile, doThisWhenFinished){
        fs.writeFile(fileName,someTextForTheFile,doThisWhenFinished);
    }
}

module.exports = FileManipulator;