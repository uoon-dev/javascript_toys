const pipe = (...methods) => (args) => methods.reduce((arg, nextFn) => nextFn(arg), args);

const getNewFolders = (folders) => folders.filter(folder => folder.match(/^New Folder/gi));

const makeNewestFolder = (newFolder) => {
    if (!newFolder) return "New Folder";

    const nextFolders = newFolder.map(folder => {
        if (!folder.match(/\d/)) return `New Folder (2)`;

        const nextNumber = parseInt(folder.match(/\d/)[0]) + 1;
        return `New Folder (${nextNumber})`
    }).filter(nextFolder => newFolder.includes(nextFolder) === false);
    
    return nextFolders[0];
}

function generateNewFolderName(existingFolders) {
    pipe(
        getNewFolders,
        makeNewestFolder
    )(existingFolders);
}

console.log(generateNewFolderName(["New Folder", "New Folder (2)"]))