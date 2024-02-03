---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Devuelve un tipo que representa los registros con campos o restricciones de tipos específicos.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Devuelve un tipo que representa los registros con campos o restricciones de tipos específicos.


## Examples

### Example #1 
Generar dinámicamente un tipo de tabla.
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
