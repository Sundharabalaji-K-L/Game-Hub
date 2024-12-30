
const getCroppedImageUrl = (url: string)=>{
    if (!url) return '';

    const term = 'media/';
    const index = url.indexOf(term) + term.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);

}

export default getCroppedImageUrl;
