
// Task 1: Understanding Callbacks

function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Karan" });
    }, 2000);
}

getUser(1, function(user) {
    console.log("User name:", user.name);
});


// Task 2: Callback Hell

function getUserCB(id, callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: id, name: "Ram" });
    }, 1000);
}

function getPostsCB(user, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        callback(["post1", "post2"]);
    }, 1000);
}

function getCommentsCB(post, callback) {
    setTimeout(() => {
        console.log("Comments fetched");
        callback(["nice", "good"]);
    }, 1000);
}

getUserCB(1, function(user) {
    getPostsCB(user, function(posts) {
        getCommentsCB(posts[0], function(comments) {
            console.log("User:", user);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
        });
    });
});


// Task 3: Promises

function getUserPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Ram" });
        }, 1000);
    });
}

function getPostsPromise(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getCommentsPromise(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["nice", "good"]);
        }, 1000);
    });
}

getUserPromise()
    .then((user) => {
        console.log("User fetched");
        console.log("User:", user);
        return getPostsPromise(user);
    })
    .then((posts) => {
        console.log("Posts fetched");
        console.log("Posts:", posts);
        return getCommentsPromise(posts[0]);
    })
    .then((comments) => {
        console.log("Comments fetched");
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.log("Error:", error);
    });



// Task 4: Async / Await

async function showData() {
    const user = await getUserPromise();
    console.log("User fetched");
    console.log("User:", user);

    const posts = await getPostsPromise(user);
    console.log("Posts fetched");
    console.log("Posts:", posts);

    const comments = await getCommentsPromise(posts[0]);
    console.log("Comments fetched");
    console.log("Comments:", comments);
}

showData();