async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById("post-title").value;
  const body = document.getElementById("make-post-body").value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!body) {
    console.log("body not coming through chief");
  }

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log("something went wrong here...");
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
