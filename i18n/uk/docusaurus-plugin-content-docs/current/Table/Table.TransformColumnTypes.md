---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Застосовує перетворення типу форми \{ column, type } із використанням конкретної культури.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Повертає таблицю із вхідних даних <code>table</code>, застосовуючи операцію перетворення до стовпців, зазначених у параметрі <code>typeTransformations</code> (у форматі \{ column name, type name}), з використанням зазначеної в параметрі <code>culture</code> культури, наприклад "uk-UA".    Якщо стовпець не існує, повертається виняток.


## Examples

### Example #1 
Перетворити числові значення у стовпці [a] на текстові значення з таблиці &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
