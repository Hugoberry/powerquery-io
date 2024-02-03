---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Zníži úroveň hlavičiek stĺpcov na prvý riadok hodnôt.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Zníži úroveň hlavičiek stĺpcov (t. j. názvy stĺpcov) na prvý riadok hodnôt. Predvolené názvy stĺpcov sú "Column1", "Column2" atď.


## Examples

### Example #1 
Znížte úroveň prvého riadka hodnôt v tabuľke.
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
