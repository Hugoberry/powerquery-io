---
title: Table.FillUp
---

# Table.FillUp


## Description

Propaguje wartość komórki do komórek zawierających wartości null, które znajdują się w tej samej kolumnie powyżej.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Zwraca tabelę z tabeli określonej w parametrze <code>table</code>, w której wartość następnej komórki jest propagowana do znajdujących się nad nią komórek o wartości null w kolumnie określonej w parametrze <code>columns</code>.


## Examples

### Example #1 
Zwraca tabelę, w której wartości null w kolumnie [Column2] zostały wypełnione wartością znajdującą się pod nimi w tabeli.
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
