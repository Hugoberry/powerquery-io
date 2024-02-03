---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


## Description

傳回資料表，並從輸入資料表中移除至少有一個資料格包含錯誤的資料列。如果指定了資料行清單，就只會檢查指定資料行中的資料格是否有錯誤。


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

傳回資料表，並從輸入資料表中移除至少有一個資料格包含錯誤的資料列。如果指定了資料行清單，就只會檢查指定資料行中的資料格是否有錯誤。


## Examples

### Example #1 
從第一個資料列移除錯誤值。
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
