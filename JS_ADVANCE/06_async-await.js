function fetchPostData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ p1: "fetchPostData" });
        }, 3000);
    });
}
function fetchCommentData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ p2: "fetchCommentData" });
        }, 2000);
    });
}

async function getAllData() {
    console.log(`Fetching All Data Collected`);
    let [postData, commentData] = await Promise.all([
        fetchPostData(),
        fetchCommentData(),
    ]);
    console.log(postData);
    console.log(commentData);
    console.log(`All Data Fetched Successfully`);
}
getAllData();
