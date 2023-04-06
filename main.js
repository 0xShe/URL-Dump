function extractUrls() {
  // 获取用户输入的文本
  const inputText = document.getElementById("input").value;

  // 正则表达式匹配 URL
  const urls = inputText.match(/\bhttps?:\/\/\S+/gi);

  // 将匹配到的 URL 显示在输出框里
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  if (urls) {
    urls.forEach(url => {
      const link = document.createElement("a");
      link.href = url;
      link.innerText = url;
      const div = document.createElement("div");
      div.appendChild(link);
      outputDiv.appendChild(div);
    });
  } else {
    outputDiv.innerText = "没有匹配到任何 URL。";
  }
}

function extractExactUrls() {
  // 获取用户输入的文本
  const inputText = document.getElementById("input").value;

  // 正则表达式匹配 URL
  const urls = inputText.match(/\bhttps?:\/\/\S+?(?=['"])/gi);

  // 将匹配到的 URL 显示在输出框里
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  if (urls) {
    urls.forEach(url => {
      const link = document.createElement("a");
      link.href = url;
      link.innerText = url;
      const div = document.createElement("div");
      div.appendChild(link);
      outputDiv.appendChild(div);
    });
  } else {
    outputDiv.innerText = "没有匹配到任何 URL。";
  }
}
