---
title: Table.SplitColumn
---

# Table.SplitColumn


## Description

Felosztja a megadott oszlopokat további oszlopok készletére a megadott felosztó függvény használatával.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Details

Felosztja a megadott oszlopokat további oszlopok készletére a megadott felosztó függvény használatával.


## Examples

### Example #1 
Ossza a [Name] oszlopot két oszlopra az „i” pozícióban
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    })
in
    Table.SplitColumn(Customers, "Name", Splitter.SplitTextByDelimiter("i"), 2)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name.1 = "Bob", Name.2 = null, Phone = "123-4567"],
    [CustomerID = 2, Name.1 = "J", Name.2 = "m", Phone = "987-6543"],
    [CustomerID = 3, Name.1 = "Paul", Name.2 = null, Phone = "543-7890"],
    [CustomerID = 4, Name.1 = "Cr", Name.2 = "st", Phone = "232-1550"]
})
```




## Category
Table.Transformation
