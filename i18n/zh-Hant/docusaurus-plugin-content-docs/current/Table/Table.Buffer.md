---
title: Table.Buffer
---

# Table.Buffer


在記憶體中緩衝處理資料表，讓它在評估期間與外部變更隔離。


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

緩衝記憶體中的資料表，在評估期間與外部變更隔離。    緩衝處理很淺。它會強制評估任何純量儲存格值，但是讓非純量值 (記錄、清單、資料表等) 保持原樣。    <br />    <br />    請注意，使用此函式不一定會讓查詢執行速度更快。在某些情況下，因為增加    讀取所有資料並儲存在記憶體中的時間，以及必須緩衝處理防止下游發生折疊而讓查詢執行速度變慢。如果資料不需要緩衝處理，只是要防止下游摺疊，請改為使用 <code>Table.StopFolding</code>。


## Examples

### Example #1 
將 SQL 資料表的所有資料列載入記憶體，讓所有下游作業都無法再查詢 SQL Server。
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
