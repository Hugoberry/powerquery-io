---
title: Web.Headers
---

# Web.Headers


## Description

以記錄值形式傳回從該 URL 下載的 HTTP 標頭。


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

以記錄形式傳回從 <code>url</code> 下載的標頭。可提供選擇性記錄參數 <code>options</code> 以指定其他屬性。記錄可以包含下欄欄位:    <ul><li><code>Query</code> : 以程式設計方式將查詢參數新增至 URL 中，無須擔心逸出。</li><li><code>ApiKeyName</code> : 若目標網站採用 API 金鑰的概念，則可使用此參數來指定 URL 中必須使用的金鑰參數名稱 (而非值)。系統會在認證中提供實際的金鑰值。</li><li><code>Headers</code> : 將此值指定為記錄，會為 HTTP 要求提供其他標頭。</li><li><code>Timeout</code> : 將此值指定為持續時間，會變更 HTTP 要求的逾時時間。預設值為 100 秒。</li><li><code>ExcludedFromCacheKey</code> : 將此值指定為清單，會在計算快取資料時排除這些 HTTP 標頭金鑰。</li><li><code>IsRetry</code> : 將此邏輯值指定為 true 時，會在擷取資料時忽略快取中的任何現有回應。</li><li><code>ManualStatusHandling</code> : 將此值指定為清單，會防止針對回應具有以下任一狀態碼的 HTTP 要求進行任何內建處理。</li><li><code>RelativePath</code> : 將此值指定為文字，會在提出要求前將其附加到基底 URL。</li></ul>    HTTP 要求會以 HEAD 方法進行。除了自訂資料連線器內容以外，只能取得回應標頭的子集 (基於安全性理由)。    


## Examples

### Example #1 
使用 RelativePath 和 Query 選項擷取 &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; 的 HTTP 標頭。
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
