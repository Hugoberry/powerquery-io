---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Omvandlar värdena för en eller flera kolumner.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

Omvandlar <code>table</code> genom att tillämpa varje kolumnåtgärd som listas i <code>transformOperations</code> (där formatet är \{ column name, transformation } eller \{ column name, transformation, new column type }).    Om en <code>defaultTransformation</code> anges tillämpas den på alla kolumner som inte är listade i <code>transformOperations</code>.    Om en kolumn i <code>transformOperations</code> inte finns genereras ett undantag om inte den valfria parametern <code>missingField</code> anger ett alternativ (t.ex. <code>MissingField.UseNull</code> eller <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Omvandla textvärdena i kolumnen [A] till talvärden och talvärdena i kolumnen [B] till textvärden.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Omvandla de numeriska värdena i den saknade kolumnen [X] till textvärden, och ignorera kolumner som inte finns.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Omvandla talvärdena i den saknade kolumnen [X] till textvärden, där null används som standard för kolumner som inte finns.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Öka talvärdena i kolumnen [B] och omvandla dem till textvärden och omvandla alla andra kolumner till tal.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
