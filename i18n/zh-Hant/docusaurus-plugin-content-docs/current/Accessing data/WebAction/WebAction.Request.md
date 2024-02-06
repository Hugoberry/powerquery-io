---
title: WebAction.Request
---

# WebAction.Request


建立動作，其執行時會傳回將 HTTP 要求當做二進位值執行的結果。


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

建立動作，其在執行時會使用 HTTP 作為二進位值傳回針對 <code>url</code> 執行 <code>method</code> 要求的結果。    可提供選擇性記錄參數 <code>options</code> 以指定其他屬性。記錄可能包含下列欄位:    <ul><li><code>Query</code> : 以程式設計方式將查詢參數新增至 URL 中，無須擔心逸出。</li><li><code>ApiKeyName</code> : 若目標網站採用 API 金鑰的概念，則可使用此參數來指定 URL 中必須使用的金鑰參數名稱 (而非值)。系統會在認證中提供實際的金鑰值。</li><li><code>Headers</code> : 將此值指定為記錄，會為 HTTP 要求提供其他標頭。</li><li><code>Timeout</code> : 將此值指定為持續時間，會變更 HTTP 要求的逾時時間。預設值為 100 秒。</li><li><code>ExcludedFromCacheKey</code> : 將此值指定為清單，會在計算快取資料時排除這些 HTTP 標頭金鑰。</li><li><code>IsRetry</code> : 將此邏輯值指定為 true 時，會在擷取資料時忽略快取中的任何現有回應。</li><li><code>ManualStatusHandling</code> : 將此值指定為清單，會防止針對回應具有以下任一狀態碼的 HTTP 要求進行任何內建處理。</li><li><code>RelativePath</code> : 將此值指定為文字，會在提出要求前將其附加到基底 URL。</li><li><code>Content</code> : 指定此值會使其內容成為 HTTP 要求的本文。</li></ul>    <br />    請注意，此功能在大多數情况下是停用的。請考慮改用 Web.Contents 或 Web.Headers。    


## Examples

### Example #1 
對 Bing 執行 GET 要求。
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
