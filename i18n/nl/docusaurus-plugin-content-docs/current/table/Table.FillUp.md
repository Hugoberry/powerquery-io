---
title: Table.FillUp
---

# Table.FillUp


Geeft de waarde van een cel door naar de cellen met nulwaarden erboven in de kolom.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Retourneert de tabel uit de opgegeven <code>table</code> waar de waarde van de volgende cel wordt doorgegeven naar de cellen met nulwaarden erboven in de opgegeven <code>columns</code> kolom.


## Examples

### Example #1 
Een tabel met de nulwaarden in kolom [Column2] retourneren die is gevuld met de waarden onder de nulwaarden uit de tabel.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
