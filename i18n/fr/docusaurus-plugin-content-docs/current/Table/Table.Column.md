---
title: Table.Column
---

# Table.Column


## Description

Retourne une colonne de données spécifiée depuis la table sous forme de liste.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Retourne la colonne de données spécifiée par <code>column</code> depuis la table <code>table</code> sous forme de liste.


## Examples

### Example #1 
Recherche les valeurs de la colonne [Name] de la table.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
