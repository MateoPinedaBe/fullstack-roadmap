// 14. Get File Extension of Filename

// Write a JavaScript exercise to get the filename extension.  

function getFilenameExtension(filename){
    let fileName = filename;

    let FNextension = fileName.split('.').pop();

    console.log(FNextension)
}

getFilenameExtension("Pedro.exe")