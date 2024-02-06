---
title: Table.FillDown
---

# Table.FillDown


Geeft de waarde van een vorige cel door naar de cellen met nulwaarden eronder in de kolom.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Retourneert de tabel uit de opgegeven <code>table</code> waar de waarde van een vorige cel wordt doorgegeven naar de cellen met nulwaarden eronder in de opgegeven <code>columns</code> kolom.


## Examples

### Example #1 
Een tabel met de nulwaarden in kolom [Place] retourneren die is gevuld met de waarden boven de nulwaarden uit de tabel.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
