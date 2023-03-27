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
    previewButton.click();
    const $markup = $("<div/>");
    $markup.formRender({
      formData: formBuilder.actions.getData("json"),
    });
    outEl.value = $markup.formRender("html");
  });
  getXMLButton.addEventListener("click", () => {
    previewButton.click();
    outEl.value = formBuilder.actions.getData("xml");
  });
  getJSONButton.addEventListener("click", () => {
    previewButton.click();
    outEl.value = formBuilder.actions.getData("json");
  });
  clearButton.addEventListener("click", () => {
    previewButton.click();
    outEl.value = "";
    formBuilder.actions.clearFields();
  });
  const copyButton = document.querySelector("#copyButton");
  copyButton.addEventListener("click", () => {
    const textToCopy = outEl.value;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        copyButton.textContent = "Copied";
        setTimeout(() => {
          copyButton.textContent = "Copy";
        }, 2000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  });
  const autoPreviewCheckbox = document.querySelector("#autoPreview");
  const buildWrapEl = document.querySelector("#build-wrap");
  let observer = null;
  beautify();

    if (autoPreviewCheckbox.checked) {
      observer = new MutationObserver((mutations) => {
        getHTMLButton.click();
        previewButton.click();
    beautify();

      });
      observer.observe(buildWrapEl, {
        childList: true,
        subtree: true,
      });
    } else {
      observer.disconnect();
      observer = null;
    }
  ;
  autoPreviewCheckbox.addEventListener("change", () => {
    getHTMLButton.click();
    previewButton.click();
    beautify();
    if (autoPreviewCheckbox.checked) {
      observer = new MutationObserver((mutations) => {
        getHTMLButton.click();
       previewButton.click();
    beautify();
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
  function beautify() {
    const options = {
      indent_with_tabs: false,
      wrap_line_length: 120,
    };
    const htmlString = outEl.value;
    const beautifiedHtml = html_beautify(htmlString, options);
    outEl.value = beautifiedHtml;
  }
});


