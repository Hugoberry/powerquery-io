---
title: Table.AddKey
---

# Table.AddKey


Pridá kľúč do tabuľky.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Pridá kľúč do tabuľky `table`, kde `columns` je zoznam názvov stĺpcov, ktoré kľúč definujú, a `isPrimary` určuje, či je kľúč primárny.


## Examples

### Example #1
Pridajte primárny kľúč s jedným stĺpcom do tabuľky.
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
