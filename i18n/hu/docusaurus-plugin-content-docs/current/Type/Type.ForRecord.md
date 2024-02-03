---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Egy olyan típust ad vissza, amely a mezőkre vonatkozó adott típusmegkötéseket tartalmazó rekordokat jelöl.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Egy olyan típust ad vissza, amely a mezőkre vonatkozó adott típusmegkötéseket tartalmazó rekordokat jelöl.


## Examples

### Example #1 
Táblatípus dinamikus létrehozása.
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
