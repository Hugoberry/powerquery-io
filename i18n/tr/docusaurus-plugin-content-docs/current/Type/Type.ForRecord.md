---
title: Type.ForRecord
---

# Type.ForRecord


Alanlarda belirli kısıt türünü içeren kayıtları temsil eden bir tür döndürür.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

Alanlarda belirli kısıt türünü içeren kayıtları temsil eden bir tür döndürür.


## Examples

### Example #1 
Dinamik olarak bir tablo türü oluşturun.
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
