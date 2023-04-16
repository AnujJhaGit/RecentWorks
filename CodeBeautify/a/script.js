document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('inputarea');
    const outputArea = document.getElementById('outputarea');
    function protoToJSON(protoData) {
      try {
        const parsedProto = protobuf.parse(protoData);
        if (!parsedProto.root) {
          console.error('Protobuf parse error:', parsedProto);
          return null;
        }
        const jsonData = parsedProto.root.toJSON();
        return jsonData;
      } catch (err) {
        console.error('Error parsing protobuf:', err);
        return null;
      }
    }
    function updateOutputArea() {
      const protoData = inputArea.value;
      const jsonData = protoToJSON(protoData);
      if (jsonData) {
        outputArea.value = JSON.stringify(jsonData, null, 2);
      } else {
        outputArea.value = '';
      }
    }
    inputArea.addEventListener('input', updateOutputArea);
  });
  