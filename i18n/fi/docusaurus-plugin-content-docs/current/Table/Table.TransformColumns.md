---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Muuntaa vähintään yhden sarakkeen arvot.


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

Muuntaa kohteen <code>table</code> ottamalla käyttöön kunkin kohdassa <code>transformOperations</code> luetellun saraketoiminnon (jossa muoto on \{ column name, transformation } tai \{ column name, transformation, new column type }).    Jos <code>defaultTransformation</code> määritetään, sitä käytetään kaikissa sarakkeissa, joita ei ole lueteltu <code>transformOperations</code>.    Jos kohdassa <code>transformOperations</code> lueteltua saraketta ei ole olemassa, tapahtuu poikkeus, ellei valinnainen parametri <code>missingField</code> määritä vaihtoehtoa (esimerkiksi <code>MissingField.UseNull</code> tai <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Muunna sarakkeen tekstiarvot [A] lukuarvoiksi ja sarakkeen lukuarvot [B] tekstiarvoiksi.
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
Muunna puuttuvan sarakkeen [X] lukuarvot tekstiarvoiksi ja ohita sarakkeet, joita ei ole olemassa.
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
Muunna puuttuvan sarakkeen [X] lukuarvot tekstiarvoiksi ja käytä oletusarvona tyhjäarvoa sarakkeille, joita ei ole olemassa.
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
Kasvata sarakkeen [B] lukuarvoja ja muunna ne tekstiarvoiksi ja muunna kaikki muut sarakkeet luvuiksi.
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
