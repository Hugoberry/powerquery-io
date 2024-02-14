---
title: Type.ForRecord
---

# Type.ForRecord


Gibt einen Typ zurück, der für Datensätze mit bestimmten Typeinschränkungen für Felder steht.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

Gibt einen Typ zurück, der für Datensätze mit bestimmten Typeinschränkungen für Felder steht.


## Examples

### Example #1 
Generieren Sie dynamisch einen Tabellentyp.
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
