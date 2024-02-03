---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Retorna un tipus que representa registres amb restriccions específiques de tipus als camps.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Retorna un tipus que representa registres amb restriccions específiques de tipus als camps.


## Examples

### Example #1 
Generació dinàmica d&#39;un tipus de taula.
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
