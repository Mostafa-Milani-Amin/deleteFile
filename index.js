const deleteManyFiles = pathArray => {
    for (let i = 0; i < pathArray.length; i++) {
        require("fs").unlink(pathArray[i], (err) => err ? console.error(err) : console.log("File removed:", pathArray[i]))

    }
}

module.exports = { deleteManyFiles }
