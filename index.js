window.onload = function () {
    const gridViewBtn = document.getElementsByClassName("btn-grid-view")[0];
    const listViewBtn = document.getElementsByClassName("btn-list-view")[0];
    const imgCol = document.querySelectorAll(".img-col");
    const postImg = document.querySelectorAll(".post-img");
    const listVisible = document.querySelectorAll(".list-visible");
    const mainRow = document.getElementsByClassName("row")[0];
  
    if (gridViewBtn && listViewBtn && imgCol) {
      gridViewBtn.addEventListener("click", function () {
        listViewBtn.classList.remove("text-primary");
        this.classList.add("text-primary");
        imgCol.forEach((el) => {
          el.classList.add("col-lg-4");
          el.classList.remove(
            "text-center",
            "border",
            "p-0",
            "rounded",
            "mx-auto"
          );
        });
        postImg.forEach((el) => {
          el.classList.add("h-100");
          el.removeAttribute("style");
        });
        listVisible.forEach((el) => {
          el.classList.add("d-none");
        });
        mainRow.removeAttribute("style");
        mainRow.classList.remove("mx-auto");
      });
      listViewBtn.addEventListener("click", function () {
        gridViewBtn.classList.remove("text-primary");
        this.classList.add("text-primary");
        imgCol.forEach((el) => {
          el.classList.remove("col-lg-4");
          el.classList.add("text-center", "border", "p-0", "rounded", "mx-auto");
        });
        postImg.forEach((el) => {
          el.classList.remove("h-100");
          el.setAttribute("style", "max-width: 100%;height: 400px");
        });
        listVisible.forEach((el) => {
          el.classList.remove("d-none");
        });
        mainRow.setAttribute("style", "max-width: 600px");
        mainRow.classList.add("mx-auto");
      });
    }
  };
  