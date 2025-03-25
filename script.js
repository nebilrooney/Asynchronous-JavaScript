async function fetchUserProfile() {
    return new Promise(resolve => setTimeout(() => resolve({ name: "Nebil Ferej", age: 28 }), 1000));
}

async function fetchUserPosts() {
    return new Promise(resolve => setTimeout(() => resolve(["my first post", "my second post", "my last post"]), 1000));
}

async function fetchComments() {
    return new Promise(resolve => setTimeout(() => resolve(["good job", "thank you"]), 1000));
}

async function fetchData() {
    try {
        console.log("Fetching user profile...");
        let user = await fetchUserProfile();
        console.log("User profile retrieved:", user);

        console.log("Fetching posts...");
        let posts = await fetchUserPosts();
        console.log("Posts retrieved:", posts);

        console.log("Fetching comments...");
        let comments = await fetchComments();
        console.log("Comments retrieved:", comments);

        return { user, posts, comments };
    } catch (error) {
        console.error("Error:", error);
    }
}

document.getElementById("fetchButton").addEventListener("click", async () => {
    let button = document.getElementById("fetchButton");
    button.disabled = true; 

    console.log("Fetching data...");
    let data = await fetchData();
    console.log("Fetched Data:", data);

    button.disabled = false; 
});
