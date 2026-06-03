---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


從 Google BigQuery 資料庫匯入資料。


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

傳回列出 Google BigQuery 中可用專案的資料表。您可以指定選用的記錄參數 `options`，以控制下列選項:

-   `ConnectionTimeout`: 一段期間，可控制放棄嘗試對伺服器進行連線之前，要等待的時間長度。預設值為 ODBC 連線逾時值。
-   `CommandTimeout`: 一段期間，可控制在取消伺服器端查詢之前，其可以執行的時間長度。
-   `BillingProject`: 計費專案識別碼。預設值為第一個可用的專案。
-   `UseStorageApi`: 指定是否要為大型結果集使用 BigQuery 儲存體 API。預設值為 true，表示使用儲存體 API。設定為 false，表示不使用儲存體 API

記錄參數指定為 \[option1 = value1, option2 = value2...\]。


## Examples

### Example #1
列出 Google BigQuery 中可用的專案
```powerquery
GoogleBigQuery.Database()
```



