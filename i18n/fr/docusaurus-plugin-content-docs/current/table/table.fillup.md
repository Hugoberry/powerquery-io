---
title: Table.FillUp
---

# Table.FillUp


Propage la valeur d'une cellule aux cellules évaluées null ci-dessus dans la colonne.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

Retourne une table à partir de la `table` spécifiée où la valeur de la cellule suivante est propagée aux cellules évaluées null ci-dessus, dans la `columns` spécifiée.


## Examples

### Example #1
Retourne une table avec les valeurs null de la colonne \[Place\] remplie avec la valeur située plus bas qu'elles dans la table.
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
