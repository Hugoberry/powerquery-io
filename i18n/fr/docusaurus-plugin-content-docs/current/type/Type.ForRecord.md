---
title: Type.ForRecord
---

# Type.ForRecord


Retourne un type qui représente les enregistrements avec des contraintes de type spécifique sur les champs.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

Retourne un type qui représente les enregistrements avec des contraintes de type spécifique sur les champs.


## Examples

### Example #1 
Générez dynamiquement un type de table.
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
