---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


Przenosi nagłówki kolumn do pierwszego wiersza wartości.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

Przenosi nagłówki kolumn (tzn. nazwy kolumn) do pierwszego wiersza wartości. Domyślne nazwy kolumn to Kolumna1, Kolumna2 itd.


## Examples

### Example #1 
Obniż poziom pierwszego wiersza wartości w tabeli.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
