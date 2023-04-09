const inputTextArea = document.getElementById("inputarea");
const outputTextArea = document.getElementById("outputarea");
const convertButton = document.getElementById("convertBtn");
convertButton.addEventListener("click", () => {
  const inputJsonString = inputTextArea.value.trim();
  try {
    const inputJsonObj = JSON.parse(inputJsonString);
    const protoDescriptor = protobuf.Type.create(inputJsonObj, "MyProtoMessage");
    const protoSchemaString = protobuf.util.toProto(protoDescriptor, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      arrays: true,
      oneofs: true,
    });
    outputTextArea.value = protoSchemaString;
    hljs.highlightBlock(outputTextArea);
  } catch (err) {
    outputTextArea.value = "Error: " + err.message;
  }
});
