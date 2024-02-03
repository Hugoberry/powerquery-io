---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Transformă valorile uneia sau mai multor coloane.


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

Transformă <code>table</code> aplicând fiecare operațiune de coloană listată în <code>transformOperations</code> (unde formatul este \{ column name, transformation } sau \{ column name, transformation, new column type }).    Dacă se specifică o <code>defaultTransformation</code>, se va aplica tuturor coloanelor care nu sunt listate în <code>transformOperations</code>.    Dacă o coloană listată în <code>transformOperations</code> nu există, apare o excepție dacă parametrul opțional <code>missingField</code> nu specifică o alternativă (de exemplu, <code>MissingField.UseNull</code> sau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Efectuați conversia valorilor text din coloana [A] în valori numerice, și a valorilor numerice din coloana [B] în valori text.
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
Efectuați conversia valorilor numerice din coloana lipsă [X] în valori text, ignorând coloanele care nu există.
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
Efectuați conversia valorilor numerice din coloana lipsă [X] în valori text, stabilind implicit valori nule pentru coloanele care nu există.
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
Incrementați valorile numerice din coloana [B] și convertiți-le în valori text și efectuați conversia tuturor celorlalte coloane în numere.
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
