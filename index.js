const form = document.getElementById("uploadForm");
const summaryDiv = document.getElementById("summary");
const summaryText = document.getElementById("summaryText");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("File");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
    const res = await fetch("https://5c1c7e8467c0.ngrok-free.app/upload", {
    method: "POST",
    body: formData,
    });

    console.log("Response status:", res.status);
    const summary = await res.text();
    console.log("Summary:", summary);

    summaryText.innerHTML = summary.replace(/\n/g, "<br>");
    summaryDiv.classList.remove("hidden");
    } catch (error) {
    console.error("Fetch error:", error);
    alert("Error during upload: " + error.message);
    }

});