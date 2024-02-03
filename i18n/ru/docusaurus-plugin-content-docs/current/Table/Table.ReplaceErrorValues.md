---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


## Description

Заменяет значения ошибок в указанных столбцах соответствующими указанными значениями.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Details

Заменяет значения ошибок в указанных столбцах <code>table</code> новыми значениями в списке <code>errorReplacement</code>. Формат списка имеет вид \{\{столбец1, значение1}, …}. Для каждого столбца может быть только одно замещающее значение; если указать столбец несколько раз, возникнет ошибка.


## Examples

### Example #1 
Замена в таблице значения ошибки текстом world.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2 
Замена в таблице значения ошибки в столбце A текстом hello, а в столбце B — текстом world.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
