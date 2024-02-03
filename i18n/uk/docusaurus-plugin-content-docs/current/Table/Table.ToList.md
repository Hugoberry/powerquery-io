---
title: Table.ToList
---

# Table.ToList


## Description

Перетворює таблицю у список, застосовуючи зазначену функцію об&#39;єднання до кожного рядка значень у таблиці.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

Перетворює таблицю у список, застосовуючи зазначену функцію об'єднання до кожного рядка значень у таблиці.


## Examples

### Example #1 
Поєднати текст кожного рядка, що містить кому.
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
