---
title: DocumentDB.Contents
---

# DocumentDB.Contents


請輸入 Azure Cosmos DB 帳戶的 URL。


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

會以 `url` 傳回 Azure Cosmos DB 資料庫的資料表。若已指定 `database`，則會改為傳回集合的資料表。此外，如果已在 `options` 記錄中指定欄位 `Query`，則會傳回在指定資料表及 (或) 集合上執行的查詢結果。


