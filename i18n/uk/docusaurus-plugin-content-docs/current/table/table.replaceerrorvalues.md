---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Замінює значення помилок у вказаних стовпцях на відповідне вказане значення.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Замінює значення помилок у вказаних стовпцях `table` на нові значення в списку `errorReplacement`. Формат списку – \{\{column1, value1\}, …\}. Допускається лише одне значення заміни на стовпець; якщо вказати стовпець більше одного разу, можлива помилка.


## Examples

### Example #1
Замінити значення помилки на текст "world" у таблиці.
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
Замінити в таблиці значення помилки в стовпці A на текст "hello", а в стовпці B – на текст "world".
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
