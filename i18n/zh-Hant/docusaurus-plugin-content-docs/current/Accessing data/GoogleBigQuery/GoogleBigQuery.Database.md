---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

從 Google BigQuery 資料庫匯入資料。


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      傳回列出 Google BigQuery 中可用專案的資料表。可指定選擇性記錄參數 <code>options</code>，以控制下列選項:      <ul>        <li><code>ConnectionTimeout</code>: 控制放棄嘗試連線至伺服器之前，等候的時間長度。預設值為 ODBC 連線逾時值。</li>        <li><code>CommandTimeout</code>: 控制取消伺服器端查詢之前，允許其執行的時間長度。</li>        <li><code>BillingProject</code>: 帳單專案識別碼。預設值為第一個可用的專案。</li>        <li><code>UseStorageApi</code>: 指定是否要為大型結果集使用 BigQuery 儲存體 API。預設值為 true，會使用儲存體 API。若設為 false，則不會使用儲存體 API</li>      </ul>    記錄參數指定為 [option1 = value1, option2 = value2...]。    


## Examples

### Example #1 
列出 Google BigQuery 中可用的專案
```powerquery
GoogleBigQuery.Database()
```



