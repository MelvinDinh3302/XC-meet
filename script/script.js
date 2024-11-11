//replace broken images with a default one
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach((img) => {
      img.onerror = function () {
        this.onerror = null; // Prevents looping if default image fails
        this.src = "../images/profiles/default.jpg"; // Set the default image
        // this.alt = "";
      };
    });
    document.querySelector("header").setAttribute("tabindex", "0");
    document.querySelector("header h2").setAttribute("tabindex", "0");
    document.querySelector("#summary").setAttribute("tabindex", "0");
    document.querySelector("#summary h2").setAttribute("tabindex", "0");
    document.querySelector("#summary p").setAttribute("tabindex", "0");
    document.querySelector("#team-results").setAttribute("tabindex", "0");
    document.querySelector("#team-results h2").setAttribute("tabindex", "0");
    document.querySelectorAll("#team-results tr").forEach((row) => {
        row.setAttribute("tabindex", "0");
    });
    document.querySelector("#individual-results").setAttribute("tabindex", "0");
    document.querySelector("#individual-results h2").setAttribute("tabindex", "0");
    document.querySelectorAll("#individual-results .athlete").forEach((element) => {
        element.setAttribute("tabindex", "0");
    });
    document.querySelector("#gallery").setAttribute("tabindex", "0");
    document.querySelector("#gallery h2").setAttribute("tabindex", "0");
    document.querySelector("footer").setAttribute("tabindex", "0");
});

//back up if the above code fail to run for some images
document.addEventListener(
  "error",
  (e) => {
    e.target.src = "../images/profiles/default.jpg";
  },
  true
);

