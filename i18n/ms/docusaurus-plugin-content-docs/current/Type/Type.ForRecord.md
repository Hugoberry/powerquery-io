---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Mengembalikan jenis yang mewakili rekod dengan kekangan jenis tertentu pada medan.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Mengembalikan jenis yang mewakili rekod dengan kekangan jenis tertentu pada medan.


## Examples

### Example #1 
Jana jenis jadual secara dinamik.
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
