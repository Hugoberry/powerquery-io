---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Vrátí typ, který reprezentuje záznamy s konkrétním omezením typů polí.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Vrátí typ, který reprezentuje záznamy s konkrétním omezením typů polí.


## Examples

### Example #1 
Dynamické generování typu tabulky
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
