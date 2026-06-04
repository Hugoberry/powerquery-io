---
title: Type.ForRecord
---

# Type.ForRecord


Menghasilkan tipe yang menunjukkan data dengan konstrain tipe spesifik pada bidang.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

Menghasilkan tipe yang menunjukkan data dengan konstrain tipe spesifik pada bidang.


## Examples

### Example #1
Buat tipe tabel secara dinamis.
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
