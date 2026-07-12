console.log("Script loaded");

const loading = document.getElementById("loading");
const comments = document.getElementById("comments");

fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then(data => {

    loading.style.display = "none";

    data.forEach(comment => {

        const li = document.createElement("li");

        li.innerHTML = `
        <strong>${comment.name}</strong><br>
        ${comment.email}<br>
        ${comment.body}
        `;

        comments.appendChild(li);

    });

})
.catch(() => {
    loading.textContent = "Failed to load data.";
});