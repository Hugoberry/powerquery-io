---
title: Table.ToList
---

# Table.ToList


## Description

Преобразует таблицу в список путем применения заданной функции объединения к каждой строке значений в таблице.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Преобразует таблицу в список путем применения заданной функции объединения к каждой строке значений в таблице.


## Examples

### Example #1 
Объединить текст каждой строки с запятой.
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
