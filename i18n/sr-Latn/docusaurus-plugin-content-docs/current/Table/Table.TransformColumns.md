---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transformiše vrednosti jedne ili više kolona.


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

Transformiše <code>table</code> primenom svake operacije kolone navedene u <code>transformOperations</code> (pri kom je format \{ column name, transformation } ili \{ column name, transformation, new column type }).    Ako je <code>defaultTransformation</code> navedeno, primeniće se na sve kolone koje nisu navedene u <code>transformOperations</code>.    Ako kolona navedena u <code>transformOperations</code> ne postoji, pojavljuje se izuzetak osim ako opcionalni parametar <code>missingField</code> ne navede alternativu (na primer, <code>MissingField.UseNull</code> ili <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Konvertujte tekstualne vrednosti u koloni [A] u brojčane vrednosti, a brojčane vrednosti u koloni [B] u tekstualne vrednosti.
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
Konvertujte numeričke vrednosti u koloni [X] koja nedostaje u tekstualne vrednosti, zanemarujući kolone koje ne postoje.
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
Konvertujte numeričke vrednosti u koloni [X] koja nedostaje u tekstualne vrednosti, što će podrazumevano dati vrednost „null“ u kolonama koje ne postoje.
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
Povećajte brojčane vrednosti u koloni [B] i konvertujte ih u tekstualne vrednosti i konvertujte sve ostale kolone u brojeve.
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
