---
title: Table.SingleRow
---

# Table.SingleRow


Retourne une seule ligne dans la table.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Retourne une seule ligne dans le `table` avec une ligne unique. Si `table` contient plus d'une ligne, une erreur est levée.


## Examples

### Example #1
Retourne la ligne de la table.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
