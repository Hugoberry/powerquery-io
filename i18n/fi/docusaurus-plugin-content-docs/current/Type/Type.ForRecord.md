---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Palauttaa tyypin, joka edustaa tietueita, joilla on tiettyjä tyyppirajoituksia kentille.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Palauttaa tyypin, joka edustaa tietueita, joilla on tiettyjä tyyppirajoituksia kentille.


## Examples

### Example #1 
Luo taulukkotyyppi dynaamisesti.
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
