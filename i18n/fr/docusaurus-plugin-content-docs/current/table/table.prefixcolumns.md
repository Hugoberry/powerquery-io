---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Retourne une table dans laquelle les colonnes ont toutes le préfixe avec le texte fourni.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Retourne une table où tous les noms de colonne du `table` spécifié sont préfixés avec le texte spécifié `prefix`, plus un point sous la forme `prefix.ColumnName`.


## Examples

### Example #1
Préfixe les colonnes de la table avec "MyTable".
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
