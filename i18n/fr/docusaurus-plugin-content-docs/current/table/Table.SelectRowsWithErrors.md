---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


Retourne une table avec uniquement les lignes supprimées de la table d&#39;entrée qui contiennent une erreur dans au moins l&#39;une des cellules. Si une liste de colonnes est spécifiée, alors seules les cellules dans les colonnes spécifiées sont inspectées pour rechercher des erreurs.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Retourne une table avec uniquement les lignes supprimées de la table d'entrée qui contiennent une erreur dans au moins l'une des cellules. Si une liste de colonnes est spécifiée, alors seules les cellules dans les colonnes spécifiées sont inspectées pour rechercher des erreurs.


## Examples

### Example #1 
Sélectionnez les noms de clients avec des erreurs dans leurs lignes.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
