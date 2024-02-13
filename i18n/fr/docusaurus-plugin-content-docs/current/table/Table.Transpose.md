---
title: Table.Transpose
---

# Table.Transpose


Convertit les colonnes en lignes et les lignes en colonnes.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Remarks

Convertit les colonnes en lignes et les lignes en colonnes.


## Examples

### Example #1 
Transforme les lignes de la table des paires nom-valeur en colonnes.
```powerquery
Table.Transpose(
    Table.FromRecords({
        [Name = "Full Name", Value = "Fred"],
        [Name = "Age", Value = 42],
        [Name = "Country", Value = "UK"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "Full Name", Column2 = "Age", Column3 = "Country"],
    [Column1 = "Fred", Column2 = 42, Column3 = "UK"]
})
```




## Category
Table.Transformation
