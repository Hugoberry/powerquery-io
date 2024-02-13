---
title: Table.AddKey
---

# Table.AddKey


Hiermee voegt u een sleutel toe aan een tabel.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Hiermee voegt u een sleutel toe <code>table</code>, waarbij <code>columns</code> de lijst is met kolomnamen waarmee de sleutel wordt gedefinieerd en <code>isPrimary</code> geeft aan of de sleutel primair is.


## Examples

### Example #1 
Een primaire sleutel met één kolom toevoegen aan een tabel.
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
