const newFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#post-title").value.trim();
  const description = document.querySelector("#post-descr").value.trim();
  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: "POST",

      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("response:", response);
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

const addCommentButton = async (event) => {
  event.preventDefault();
  const commentText = document.querySelector("#commentText").value.trim();

  console.log("commentText:", commentText)
  
  if (commentText) {
    const response = await fetch(`/post/${id}`, {
      method: "POST",
      body: JSON.stringify(commentText),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.ok) {
      console.log("response:", response);
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create comment");
    }
  }
};


document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".post-list")
  .addEventListener("click", delButtonHandler);

document
  .querySelector(".comment-form")
  .addEventListener("submit", addCommentButton);
