---
title: Table.FillUp
---

# Table.FillUp


## Description

列の上の NULL 値セルにセル値を反映します。


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

指定された <code>table</code> から、指定された <code>columns</code> の上の NULL 値セルに次のセル値を反映したテーブルを返します。


## Examples

### Example #1 
テーブルの列 [Column2] の NULL 値をその下の値で埋めたテーブルを返します。
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
