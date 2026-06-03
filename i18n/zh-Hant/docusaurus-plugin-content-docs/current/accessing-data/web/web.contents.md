---
title: Web.Contents
---

# Web.Contents


將從 URL 下載的內容傳回成二進位。


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

以二進位形式傳回從 `url` 下載的內容。您可提供選用的記錄參數 `options` 來指定其他屬性。記錄可以包含下列欄位:

-   `Query` : 以程式設計方式將查詢參數新增至 URL 中，無須擔心逸出。
-   `ApiKeyName` : 若目標網站採用 API 金鑰的概念，則可使用此參數來指定 URL 中必須使用的金鑰參數名稱 (而非值)。系統會在認證中提供實際的金鑰值。
-   `Headers` : 將此值指定為記錄，會為 HTTP 要求提供其他標頭。
-   `Timeout` : 將此值指定為持續時間，會變更 HTTP 要求的逾時時間。預設值為 100 秒。
-   `ExcludedFromCacheKey` : 將此值指定為清單，會在計算快取資料時排除這些 HTTP 標頭金鑰。
-   `IsRetry` : 將此邏輯值指定為 true 時，會在擷取資料時忽略快取中的任何現有回應。
-   `ManualStatusHandling` : 將此值指定為清單，會防止針對回應具有以下任一狀態碼的 HTTP 要求進行任何內建處理。
-   `RelativePath` : 將此值指定為文字，會在提出要求前將其附加到基底 URL。
-   `Content` : 指定此值會將 Web 要求從 GET 變更為 POST，方法是使用選項值作為 POST 的內容。

HTTP 要求會以 GET (未指定內容時) 或 POST (指定內容時) 形式進行。POST 要求只能匿名進行。  
  
HTTP 回應的標頭可以二進位結果上的中繼資料形式取得。除非是在自訂資料連線器的情境下，否則基於安全性理由，只能取得回應標頭的部分子集。


## Examples

### Example #1
使用 RelativePath 和 Query 選項來擷取 `"https://bing.com/search?q=Power+Query"` 的內容。這些選項可用於動態查詢靜態基底 URL。
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
針對 URL 執行張貼，傳遞二進位 JSON 承載並將回應剖析為 JSON。
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
連線到接受驗證金鑰作為查詢字串一部分的安全 URL。而不是在 M 中硬式編碼驗證金鑰 (這會造成安全性風險)， 在 M 中指定金鑰的名稱 (而不是其值)，並選擇 Web API 驗證，以及在 Web API 認證中輸入金鑰值，即可安全地提供金鑰。 以此方式使用時，下列範例會產生 `"https://contoso.com/api/customers/get?api_key=******"` 的要求。
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
