---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Devolve un tipo que representa rexistros con restricións específicas de tipo nos campos.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Devolve un tipo que representa rexistros con restricións específicas de tipo nos campos.


## Examples

### Example #1 
Xerar un tipo de táboa de forma dinámica.
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
