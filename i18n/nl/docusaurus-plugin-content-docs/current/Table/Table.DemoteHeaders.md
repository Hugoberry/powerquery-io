---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Verplaatst de kolomkoppen omlaag naar de eerste rij met waarden.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Verplaatst de kolomkoppen (de kolomnamen) omlaag naar de eerste rij met waarden. De standaardkolomnamen zijn "Kolom1", "Kolom2", enzovoort.


## Examples

### Example #1 
De eerste rij met waarden in de tabel omlaag verplaatsen.
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
