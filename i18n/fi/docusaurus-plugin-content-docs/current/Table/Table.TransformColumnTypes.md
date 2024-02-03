---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Ottaa käyttöön tyyppimuunnokset muodossa \{ column, type } käyttäen määritettyä maa-asetusta.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Palauttaa taulukon syötteestä <code>table</code> ottamalla käyttöön muunnostoiminnon parametrissa <code>typeTransformations</code> määritetyille sarakkeille (tässä muoto on \{ column name, type name}) käyttäen määritettyä maa-asetusta parametrissa <code>culture</code> (esimerkiksi en-US).    Jos saraketta ei ole, tapahtuu poikkeus.


## Examples

### Example #1 
Muunna sarakkeen [a] lukuarvot tekstiarvoiksi taulukosta &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
