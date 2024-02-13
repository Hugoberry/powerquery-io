---
title: Type.ForRecord
---

# Type.ForRecord


Zwraca typ reprezentujący rekordy z określonymi ograniczeniami dotyczącymi typów w polach.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

Zwraca typ reprezentujący rekordy z określonymi ograniczeniami dotyczącymi typów w polach.


## Examples

### Example #1 
Dynamicznie generuj typ tabeli.
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
