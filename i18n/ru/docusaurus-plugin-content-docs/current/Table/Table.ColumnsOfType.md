---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Возвращает список с именами столбцов, соответствующих указанным типам.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Возвращает список с именами столбцов таблицы <code>table</code>, соответствующих указанным в <code>listOfTypes</code> типам.


## Examples

### Example #1 
Возврат имен столбцов типа Number.Type из таблицы.
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
