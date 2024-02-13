---
title: Table.FillDown
---

# Table.FillDown


列の下の NULL 値セルに上のセル値を反映します。


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

指定された <code>table</code> から、指定された <code>columns</code> の下の NULL 値セルに上のセル値を反映したテーブルを返します。


## Examples

### Example #1 
テーブルの列 [Place] の NULL 値をその上の値で埋めたテーブルを返します。
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
