---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Повертає тип, що представляє записи з обмеженнями певного типу на полях.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Повертає тип, що представляє записи з обмеженнями певного типу на полях.


## Examples

### Example #1 
Динамічне створення типу таблиці.
```powerquery
let
    columnNames = {"Name", "Score"},
    columnTypes = {type text, type number},
    rowColumnTypes = List.Transform(columnTypes, (t) => [Type = t, Optional = false]),
    rowType = Type.ForRecord(Record.FromList(rowColumnTypes, columnNames), false)
in
    #table(type table rowType, {{"Betty", 90.3}, {"Carl", 89.5}})
```

Result: 
```powerquery
#table(
    type table [Name = text, Score = number],
    {{"Betty", 90.3}, {"Carl", 89.5}}
)
```




## Category
Type
