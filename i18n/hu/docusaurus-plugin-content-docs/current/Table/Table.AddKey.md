---
title: Table.AddKey
---

# Table.AddKey


## Description

Hozzáad egy kulcsot egy táblázathoz.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Details

Hozzáad egy kulcsot a(z) <code>table</code> táblázathoz, ahol a(z) <code>columns</code> a kulcsot meghatározó oszlopnevek listája, illetve a(z) <code>isPrimary</code> megadja, hogy a kulcs elsődleges-e.


## Examples

### Example #1 
Egyoszlopos elsődleges kulcs hozzáadása egy táblázathoz.
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
