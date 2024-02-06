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

傳回資料表，列出資料庫<code>資料庫</code>中 Amazon Redshift 叢集<code>伺服器</code>上的資料表。您可以指定選擇性記錄參數<code>選項</code>，以控制下列選項: <ul><li><code>提供者名稱</code>: 要做為連線提供者名稱的文字值。這會在使用 Microsoft Authentication 時使用</li><li><code>批次大小</code>: 在單一呼叫伺服器時擷取的資料列數目。</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



