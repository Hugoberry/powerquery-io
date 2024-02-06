---
title: Table.FillDown
---

# Table.FillDown


Propage la valeur d&#39;une cellule précédente aux cellules évaluées null ci-dessous dans la colonne.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Retourne une table à partir de la <code>table</code> spécifiée où la valeur de la cellule précédente est propagée aux cellules évaluées null ci-dessous, dans la <code>columns</code> spécifiée.


## Examples

### Example #1 
Retourne une table avec les valeurs null de la colonne [Place] remplie avec la valeur située plus haut qu&#39;elles dans la table.
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
