---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

傳回符合指定類型的資料行名稱清單。


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

傳回符合 <code>listOfTypes</code> 中指定類型的資料表 <code>table</code> 中資料行的名稱清單。


## Examples

### Example #1 
傳回資料表中 Number.Type 類型的資料行名稱。
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
