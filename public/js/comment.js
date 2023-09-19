
const addCommentButton = async (event) => {
  event.preventDefault();

  const post_id = window.location.toString().split('/')[
     window.location.toString().split('/').length - 1];

  console.log("post_id:", post_id,);


  const commentText = document.querySelector("#commentContent").value.trim();

  console.log("commentText:", commentText)
  
  if (commentText) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({commentText, post_id}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    if (response.ok) {
      console.log("response:", response);
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", addCommentButton);
