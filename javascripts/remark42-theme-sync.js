(function () {
  function getRemarkThemeFromMkDocs() {
    var scheme = document.body.getAttribute("data-md-color-scheme");
    return scheme === "slate" ? "dark" : "light";
  }

  function syncRemarkConfigTheme() {
    if (window.remark_config && typeof window.remark_config === "object") {
      window.remark_config.theme = getRemarkThemeFromMkDocs();
    }
  }

  function syncRemarkWidgetTheme() {
    if (window.REMARK42 && typeof window.REMARK42.changeTheme === "function") {
      window.REMARK42.changeTheme(getRemarkThemeFromMkDocs());
    }
  }

  function syncAll() {
    syncRemarkConfigTheme();
    syncRemarkWidgetTheme();
  }

  function observePaletteChanges() {
    if (!document.body) {
      return;
    }

    if (window.__remark42PaletteObserver) {
      window.__remark42PaletteObserver.disconnect();
    }

    window.__remark42PaletteObserver = new MutationObserver(function (
      mutations,
    ) {
      for (var i = 0; i < mutations.length; i++) {
        if (mutations[i].attributeName === "data-md-color-scheme") {
          syncAll();
          break;
        }
      }
    });

    window.__remark42PaletteObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-md-color-scheme"],
    });
  }

  function initializeSync() {
    syncAll();
    observePaletteChanges();
    setTimeout(syncRemarkWidgetTheme, 250);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      initializeSync();
    });
  } else {
    window.addEventListener("DOMContentLoaded", initializeSync);
  }
})();
