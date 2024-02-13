---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


Rétrograde les en-têtes des colonnes à la première ligne de valeurs.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

Rétrograde les en-têtes des colonnes (par exemple, les noms des colonnes) à la première ligne de valeurs. Les noms de colonne par défaut sont " Column1 ", " Column2 " et ainsi de suite.


## Examples

### Example #1 
Rétrograde la première ligne des valeurs dans la table.
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
