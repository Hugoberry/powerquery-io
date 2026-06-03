---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


從 Amazon Redshift 資料庫匯入資料。


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

傳回資料表，列出資料庫 `database` 中 Amazon Redshift 叢集 `server` 上的資料表。您可以指定選用的記錄參數 `options`，以控制下列選項:

-   `Provider Name`: 做為連線提供者名稱的文字值。這會在使用 Microsoft 驗證時使用。
-   `Batch Size`: 在單一呼叫伺服器時擷取的資料列數目。


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



