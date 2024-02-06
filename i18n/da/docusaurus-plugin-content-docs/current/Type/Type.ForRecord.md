---
title: Type.ForRecord
---

# Type.ForRecord


Returnerer en type, der repræsenterer poster med definerede typebegrænsninger for felter.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

Returnerer en type, der repræsenterer poster med definerede typebegrænsninger for felter.


## Examples

### Example #1 
Opret en tabeltype dynamisk.
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
