---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Poniža glave stolpcev na prvo vrstico vrednosti.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Poniža glave stolpcev (tj. imena stolpcev) na prvo vrstico vrednosti. Privzeta imena stolpcev so "Column1", "Column2" itd.


## Examples

### Example #1 
Ponižajte prvo vrstico vrednosti v tabeli v tabeli.
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
