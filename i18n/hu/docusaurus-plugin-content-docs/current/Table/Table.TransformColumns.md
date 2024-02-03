---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Átalakítja egy vagy több oszlop értékeit.


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

A(z) <code>table</code> helyen szereplő egyes oszlopműveletek alkalmazásával átalakítja a(z) <code>transformOperations</code> elemet (ahol a formátum \{ column name, transformation } vagy \{ column name, transformation, new column type }).    Ha <code>defaultTransformation</code> van megadva, a(z) <code>transformOperations</code> helyen nem szereplő összes oszlopra alkalmazva lesz.    Ha a(z) <code>transformOperations</code> helyen szereplő valamelyik oszlop nem létezik, kivétel történik, ha a választható <code>missingField</code> paraméter nem ad meg alternatívát (például <code>MissingField.UseNull</code> vagy <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Az [A] oszlop szöveges értékeit számértékekké alakíthatja, a [B] oszlopban szereplő számértékeket pedig szöveges értékekké.
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
A hiányzó [X] oszlop számértékeit szövegértékekké alakíthatja, figyelmen kívül hagyva a nem létező oszlopokat.
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
Átalakíthatja a hiányzó [X] oszlop számértékeit szövegértékekké, null alapértelmezett értéket adva a nem létező oszlopoknak.
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
Növelheti a [B] oszlopban szereplő számértékeket és átalakíthatja őket szöveges értékekké, és az összes többi oszlopot számmá alakíthatja.
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
