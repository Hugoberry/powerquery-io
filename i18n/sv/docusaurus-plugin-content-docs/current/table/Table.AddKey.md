---
title: Table.AddKey
---

# Table.AddKey


Lägger till en nyckel för angiven tabelltyp.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Lägg till en nyckel i <code>table</code>, där <code>columns</code> är en del av kolumnnamnen som definierar nyckeln och <code>isPrimary</code> anger om nyckeln är primär.


## Examples

### Example #1 
Lägg till en primärnyckel med en kolumn i en tabell.
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
