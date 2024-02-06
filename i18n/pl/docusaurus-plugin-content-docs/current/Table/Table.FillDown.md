---
title: Table.FillDown
---

# Table.FillDown


Propaguje wartość poprzedniej komórki do komórek zawierających wartości null, które znajdują się w tej samej kolumnie poniżej.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Zwraca tabelę z tabeli określonej w parametrze <code>table</code>, w której wartość poprzedniej komórki jest propagowana do znajdujących się pod nią komórek o wartości null w kolumnie określonej w parametrze <code>columns</code>.


## Examples

### Example #1 
Zwróć tabelę, w której wartości null w kolumnie [Place] zostały wypełnione wartością znajdującą się nad nimi w tabeli.
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
