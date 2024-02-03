---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transformerer værdierne i en eller flere kolonner.


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

Transformerer <code>table</code> ved at anvende hver kolonnehandling, der er angivet i <code>transformOperations</code> (hvor formatet er \{ column name, transformation } eller \{ column name, transformation, new column type }).    Hvis der er angivet en <code>defaultTransformation</code>, anvendes den på alle kolonner, der ikke er angivet i <code>transformOperations</code>.    Hvis en kolonne, der er angivet i <code>transformOperations</code>, ikke findes, udløses der en undtagelse, medmindre den valgfri parameter <code>missingField</code> angiver et alternativ (f.eks. <code>MissingField.UseNull</code> eller <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Konvertér tekstværdierne i kolonnen [A] til talværdier og talværdierne i kolonne [B] til tekstværdier.
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
Konvertér talværdierne i den manglende kolonne [X] til tekstværdier, og ignorer kolonner, der ikke findes.
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
Konvertér talværdierne i den manglende kolonne [X] til tekstværdier, og benyt som standard null for kolonner, der ikke findes.
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
Øg talværdierne i kolonne [B] gradvist, konvertér dem til tekstværdier, og konvertér alle andre kolonner til tal.
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
