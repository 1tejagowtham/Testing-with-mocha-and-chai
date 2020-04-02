// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
    const extension = filename.match(/.*\.([^\.]*)$/)[1];
    /*
        const html = undefined;
        const css = undefined;
        const jpeg = undefined;
        const jpg = undefined;
        const plain = undefined;
    */
    if (extension == 'html') {
        return "text/html";
    } else if (extension == 'css') {
        return "text/css";
    } else if (extension == 'jpeg') {
        return "image/jpeg";
    } else if (extension == 'jpg') {
        return "image/jpeg";
    } else {
        return "text/plain";
    }
}