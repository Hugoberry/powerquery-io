---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Returnează un tip ce reprezintă înregistrările cu anumite restricţii pentru tip asupra câmpurilor.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Returnează un tip ce reprezintă înregistrările cu anumite restricţii pentru tip asupra câmpurilor.


## Examples

### Example #1 
Generați dinamic un tip de tabel.
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
