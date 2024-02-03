---
title: Table.ToList
---

# Table.ToList


## Description

通过将指定的组合函数应用于表中的每一行值，将表转换为列表。


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

通过将指定的组合函数应用于表中的每一行值，将表转换为列表。


## Examples

### Example #1 
使用逗号合并每行文本。
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
