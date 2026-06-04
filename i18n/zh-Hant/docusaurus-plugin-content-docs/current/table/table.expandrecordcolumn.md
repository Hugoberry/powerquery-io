---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


將記錄的資料行擴充成包含每個值的資料行。


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

指定輸入 `table` 中記錄的 `column` 之後，建立資料表，並針對記錄中的每個欄位各包含一個資料行。或者，也可指定 `newColumnNames` 以針對新資料表中的欄位確保唯一的名稱。

-   `table`: 包含要擴充之記錄資料行的原始資料表。
-   `column`: 要擴充的資料行。
-   `fieldNames`: 要擴充成資料表資料行的欄位清單。
-   `newColumnNames`: 要提供新資料行的資料行名稱清單。新的資料行名稱不得與新資料表中的任何資料行重複。


## Examples

### Example #1
將資料表 `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` 中的資料行 \[a\] 擴充成 3 個資料行 "aa"、"bb" 和 "cc"。
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
