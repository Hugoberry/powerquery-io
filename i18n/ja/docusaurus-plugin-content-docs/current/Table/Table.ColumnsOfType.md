---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

指定の型と一致する列の名前リストを返します。


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

<code>listOfTypes</code> で指定された型と一致する列の名前をテーブル <code>table</code> から取得してリストとして返します。


## Examples

### Example #1 
テーブルから Number.Type 型の列の名前を返します。
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
