---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Өрістерде белгілі бір түр шектеулері бар жазбаларды білдіретін түрді қайтарады.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Өрістерде белгілі бір түр шектеулері бар жазбаларды білдіретін түрді қайтарады.


## Examples

### Example #1 
Кесте түрін динамикалық түрде жасау.
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
