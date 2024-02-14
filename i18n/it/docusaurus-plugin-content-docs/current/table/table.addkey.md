---
title: Table.AddKey
---

# Table.AddKey


Aggiunge una chiave a una tabella.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Aggiunge una chiave a <code>table</code>, dove <code>columns</code> è l'elenco di nomi di colonna che definiscono la chiave e <code>isPrimary</code> specifica se la chiave è primaria.


## Examples

### Example #1 
Aggiungere una chiave primaria a colonna singola a una tabella.
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
