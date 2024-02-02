---
title: Table.ToRows
---

# Table.ToRows


## Description

Crée une liste de listes imbriquées de valeurs de lignes depuis une table.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Crée une liste de listes imbriquées depuis la table, <code>table</code>.  Chaque élément de liste est une liste interne qui contient les valeurs des lignes.


## Examples

### Example #1 
Créer une liste des valeurs de ligne à partir de la table.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
