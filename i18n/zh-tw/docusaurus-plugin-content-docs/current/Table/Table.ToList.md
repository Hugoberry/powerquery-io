---
title: Table.ToList
---

# Table.ToList


## Description

將指定的結合函數套用至資料表中每個資料列的值，藉以將資料表轉換成清單。


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

將指定的結合函數套用至資料表中每個資料列的值，藉以將資料表轉換成清單。


## Examples

### Example #1 
使用逗號將每個資料列的文字合併。
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
