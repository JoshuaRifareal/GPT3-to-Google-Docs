// DROP DOWN MENU
function onOpen() {
 DocumentApp.getUi().createMenu("GPT3 MAGIC")
 .addItem("Generate Ideas", "generateIdeas")
 .addItem("Generate Image", "generateImage")
  .addToUi();
}
// ****END MENU****
 
// FIXED VARIABLES. Your API and Model Type
var apiKey = "xxxxxxxxxxxxx";
var model = "text-davinci-003"
// ****END VARIABLES****
 
// GENERATE PROMPT
function xxxxxxx() {
var doc = DocumentApp.getActiveDocument()
var selectedText = doc.getSelection().getRangeElements()[0].getElement().asText().getText()
var body = doc.getBody()
var prompt = "xxxxxxxxxxxx " + selectedText;
temperature= 0
maxTokens = 2060
  const requestBody = {
    "model": model,
    "prompt": prompt,
    "temperature": temperature,
    "max_tokens": maxTokens,
  };
  const requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+apiKey
    },
    "payload": JSON.stringify(requestBody)
  }
const response = UrlFetchApp.fetch("https://api.openai.com/v1/completions", requestOptions);
var responseText = response.getContentText();
var json = JSON.parse(responseText);
Logger.log(json['choices'][0]['text'])
para = body.appendParagraph(json['choices'][0]['text'])
}
// ****END PROMPT****
