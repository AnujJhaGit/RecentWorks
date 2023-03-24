document.addEventListener("DOMContentLoaded", () => {
  const formBuilderOptions = {
    showActionButtons: false,
    scrollToFieldOnAdd: false,
    sortableControls: true,
  };

  const formBuilder = $("#build-wrap").formBuilder(formBuilderOptions);

  const previewButton = document.querySelector("#preview");
  const getHTMLButton = document.querySelector("#getHTML");
  const getXMLButton = document.querySelector("#getXML");
  const getJSONButton = document.querySelector("#getJSON");
  const clearButton = document.querySelector("#clear");
  const buildPreviewFormEl = document.querySelector("#build-preview form");
  const outEl = document.querySelector("#out");

  previewButton.addEventListener("click", () => {
    $(buildPreviewFormEl).formRender({
      formData: formBuilder.actions.getData("json"),
    });
  });

  getHTMLButton.addEventListener("click", () => {
    const $markup = $("<div/>");
    $markup.formRender({
      formData: formBuilder.actions.getData("json"),
    });
    outEl.value = $markup.formRender("html");
    hljs.highlightAll();
  });

  getXMLButton.addEventListener("click", () => {
    outEl.value = formBuilder.actions.getData("xml");
  });

  getJSONButton.addEventListener("click", () => {
    outEl.value = formBuilder.actions.getData("json");
  });

  clearButton.addEventListener("click", () => {
    previewButton.classList.remove("btn-secondary");
    previewButton.classList.add("btn-info");
    previewButton.textContent = `Preview`;
    outEl.value = "";
    formBuilder.actions.clearFields();
  });

  const autoPreviewCheckbox = document.querySelector("#autoPreview");
  const buildWrapEl = document.querySelector("#build-wrap");
  let observer = null;

  autoPreviewCheckbox.addEventListener("change", () => {
    if (autoPreviewCheckbox.checked) {
      observer = new MutationObserver((mutations) => {
        getHTMLButton.click();
        $(buildPreviewFormEl).formRender({
          formData: formBuilder.actions.getData("json"),
        });
      });
      observer.observe(buildWrapEl, {
        childList: true,
        subtree: true,
      });
    } else {
      observer.disconnect();
      observer = null;
    }
  });
});
