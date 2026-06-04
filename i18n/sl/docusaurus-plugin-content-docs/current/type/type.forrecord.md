---
title: Type.ForRecord
---

# Type.ForRecord


Vrne vrsto, ki predstavlja zapise z omejitvami določene vrste v poljih.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

Vrne vrsto, ki predstavlja zapise z omejitvami določene vrste v poljih.


## Examples

### Example #1
Dinamično ustvarite vrsto tabele.
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
