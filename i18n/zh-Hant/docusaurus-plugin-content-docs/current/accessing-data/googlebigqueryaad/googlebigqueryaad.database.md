---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


使用 Microsoft Entra ID 從 Google BigQuery 資料庫匯入資料


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

傳回表格，列出 Google BigQuery 中可用的專案，使用 Microsoft Entra ID 做為 `Billing Project ID`。您可以指定選用的記錄參數 `options`，以控制下列選項:

-   `ConnectionTimeout`: 一段期間，可控制放棄嘗試對伺服器進行連線之前，要等待的時間長度。預設值為 ODBC 連線逾時值。
-   `CommandTimeout`: 一段期間，可控制在取消伺服器端查詢之前，其可以執行的時間長度。
-   `UseStorageApi`: 指定是否要為大型結果集使用 BigQuery 儲存體 API。預設值為 true，表示使用儲存體 API。設定為 false，表示不使用儲存體 API
-   `AudienceUri`: 這是 ODBC 驅動程式可用於其權杖交換要求的對象 URI。此欄位必須是完整 URI (即 //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread)，其中的 pool\_id 是用來識別員工集區的全域唯一名稱。

記錄參數指定為 \[option1 = value1, option2 = value2...\]。


## Examples

### Example #1
使用 Microsoft Entra ID 列出 Google BigQuery 中的可用專案
```powerquery
GoogleBigQueryAad.Database()
```



