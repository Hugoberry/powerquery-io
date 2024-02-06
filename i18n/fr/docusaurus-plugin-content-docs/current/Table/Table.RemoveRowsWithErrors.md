---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Retourne une table avec les lignes supprimées de la table d&#39;entrée qui contiennent une erreur dans au moins l&#39;une des cellules. Si une liste de colonnes est spécifiée, alors seules les cellules dans les colonnes spécifiées sont inspectées pour rechercher des erreurs.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Retourne une table avec les lignes supprimées de la table d'entrée qui contiennent une erreur dans au moins l'une des cellules. Si une liste de colonnes est spécifiée, alors seules les cellules dans les colonnes spécifiées sont inspectées pour rechercher des erreurs.


## Examples

### Example #1 
Supprimez la valeur d&#39;erreur de la première ligne.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
