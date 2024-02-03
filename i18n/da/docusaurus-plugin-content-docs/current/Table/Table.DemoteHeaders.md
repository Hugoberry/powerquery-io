---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Sænk kolonneoverskrifterne til første række med værdier.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Sænker kolonneoverskrifterne (dvs. kolonnenavne) til første række med værdier. Standardkolonnenavnene er "Column1", "Column2" osv.


## Examples

### Example #1 
Sænk første række med værdier i tabellen.
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
