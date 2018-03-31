    var link = document.querySelector(".button.search");
    var popup = document.querySelector(".search-form");
    var depart = popup.querySelector("[name=depart]");
    var arravial = popup.querySelector("[name=arravial]");
    var child = popup.querySelector("[name=child]");
    var adult = popup.querySelector("[name=adult]");
    var isStorageSupport = true;
    var storage1 = "";
    var storage2 = "";

    try {
      storage = localStorage.getItem("login");
    } catch (err) {
      isStorageSupport = false;
    }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("search-form-show");

      if (storage1) {
        adult.value = storage1;
      }

      if (storage2) {
        child.value = storage2;
      }

    });

    popup.addEventListener("submit", function (evt) {
      evt.preventDefault();
      if (!depart.value || !arravial.value || !child.value || !adult.value) {
        evt.preventDefault();
        popup.classList.remove("search-form-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("search-form-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("adult", adult.value);
          localStorage.setItem("child", child.value);
        }
      }
    });
