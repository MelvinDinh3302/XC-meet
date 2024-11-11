//replace broken images with a default one
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach((img) => {
      img.onerror = function () {
        this.onerror = null; // Prevents looping if default image fails
        this.src = "../images/profiles/default.jpg"; // Set the default image
        this.alt = "broken image";
      };
    });
});

//back up if the above code fail to run for some images
document.addEventListener(
  "error",
  (e) => {
    e.target.src = "../images/profiles/default.jpg";
  },
  true
);
