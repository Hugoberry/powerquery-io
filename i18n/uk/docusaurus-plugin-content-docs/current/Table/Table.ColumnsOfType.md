---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Повертає список імен стовпців, які відповідають зазначеним типам.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Повертає список з іменами стовпців із таблиці <code>table</code>, які відповідають типам, зазначеним у параметрі <code>listOfTypes</code>.


## Examples

### Example #1 
Повернути назви стовпців типу Number.Type із таблиці.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
