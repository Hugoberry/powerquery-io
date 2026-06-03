---
title: OData.Feed
---

# OData.Feed


傳回 OData 服務所提供 OData 摘要的資料表。


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

從 URI `serviceUri`、標頭 `headers` 傳回由 OData 服務提供的 OData 摘要資料表。可以指定布林值，指定是使用同時連線還是使用選用記錄參數 `options`，以控制以下選項:

-   `Query`: 以程式設計方式將查詢參數新增至 URL，而無須擔心逸出。
-   `Headers`: 將此值指定為記錄將為 HTTP 要求提供其他標頭。
-   `ExcludedFromCacheKey`: 將此值指定為清單，將排除這些 HTTP 標頭機碼作為快取資料計算的一部分。
-   `ApiKeyName`: 若目標網站採用 API 金鑰的概念，則可使用此參數來指定 URL 中必須使用的金鑰參數名稱 (而非值)。實際金鑰值則於認證中提供。
-   `Timeout`: 將此值指定為持續時間會變更 HTTP 要求的逾時。預設值為 600 秒。
-   `EnableBatch`: 邏輯 (true/false)，可設定在超過 MaxUriLength 時，是否允許產生 OData $batch 要求 (預設為 false)。
-   `MaxUriLength`: 數值，表示允許傳送給 OData 服務的 URI 長度上限。當超過該值且 EnableBatch 為 true 時，會向 OData $batch 端點提出要求，否則會失敗 (預設值為 2048)。
-   `Concurrent`: 邏輯 (true/false)，當其設為 true 時，會同時提出服務要求。當設為 false 時，則依序提出要求。若未指定，服務的 AsynchronousRequestsSupported 註釋會決定此值。若服務未指定是否支援 AsynchronousRequestsSupported，將會依序提出要求。
-   `ODataVersion`: 數字 (3 或 4)，可指定將用於 OData 服務的 OData 通訊協定版本。若未指定，將會要求所有支援的版本。此服務版本由服務傳回的 OData-Version 標頭決定。
-   `FunctionOverloads`: 邏輯 (true/false)，當其設為 true 時，函數匯入多載會以單獨的項目在導覽器中列出; 當設為 false 時，函數匯入多載會作爲聯合函數在導覽器中列出。V3 的預設值為 false。V4 的預設值為 true。
-   `MoreColumns`: 邏輯 (true/false)，當其設為 true 時，會將「更多資料行」資料行新增到包含開放式類型與多形類型的各個實體摘要。這會包含未在基底類型中宣告的欄位。當設為 false 時，此欄位不存在。預設為 false。
-   `IncludeAnnotations`: 以逗號分隔的命名空間合格字詞名稱或模式清單，以「\*」爲萬用字元。根據預設，不包含任何註釋。
-   `IncludeMetadataAnnotations`: 中繼資料文件要求中要包含之命名空間合格字詞名稱或模式清單 (以逗號分隔)，以「\*」爲萬用字元。根據預設，包含與 IncludeAnnotations 相同的註釋。
-   `OmitValues`: 允許 OData 服務避免寫出回應中的特定值。如果服務認可，我們將從省略的欄位中推斷這些值。包含以下選項:
    -   `ODataOmitValues.Nulls`: 允許 OData 服務省略 null 值。
-   `Implementation`: 指定要使用之 OData 連接器的實作。有效值為「2.0」或 Null。


## Examples

### Example #1
連線到 TripPin OData 服務。
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
