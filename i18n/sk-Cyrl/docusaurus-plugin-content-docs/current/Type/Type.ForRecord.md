---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Vráti typ, ktorý predstavuje záznamy so špecifickými obmedzeniami typu v poliach.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Vráti typ, ktorý predstavuje záznamy so špecifickými obmedzeniami typu v poliach.


## Examples

### Example #1 
Dynamicky vygenerujte typ tabuľky.
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
