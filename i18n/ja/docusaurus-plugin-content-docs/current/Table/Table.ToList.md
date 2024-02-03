---
title: Table.ToList
---

# Table.ToList


## Description

指定された結合関数をテーブルの各行の値に適用してテーブルをリストに変換します。


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

指定された結合関数をテーブルの各行の値に適用してテーブルをリストに変換します。


## Examples

### Example #1 
各行のテキストをコンマで結合します。
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
