---
title: Table.AddKey
---

# Table.AddKey


## Description

Dodaje ključ u tabelu.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Dodaje ključ u tabelu <code>table</code>, gde je <code>columns</code> lista imena kolona koja definiše ključ, a <code>isPrimary</code> navodi da li je ključ primaran.


## Examples

### Example #1 
Dodajte primarni ključ sa jednom kolonom u tabelu.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
