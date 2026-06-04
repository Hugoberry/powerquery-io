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

在記憶體中緩衝處理資料表，讓它在評估期間與外部變更隔離。 緩衝處理為淺層。它會強制評估任何純量儲存格的值，但非純量值 (記錄、清單、資料表等) 則保持原樣。

-   `table`: 要在記憶體中緩衝的資料表。
-   `options`: (選用) 可使用以下選項記錄值:
    -   `BufferMode`: 緩衝模式，描述要執行的緩衝類型。此選項可為 `BufferMode.Eager`或 `BufferMode.Delayed`。

使用此函數可能會讓查詢加速，也可能不會。在某些情況下，由於 讀取所有資料並將其儲存在記憶體中的新增成本，以及緩衝會防止下游摺疊，它可能會導致查詢執行速度變慢。如果資料不需要 緩衝處理，但您只是想防止下游摺疊，請改用 `Table.StopFolding`。


## Examples

### Example #1
將 SQL 資料表的所有資料列載入記憶體，讓所有下游作業都無法再查詢 SQL Server。
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
