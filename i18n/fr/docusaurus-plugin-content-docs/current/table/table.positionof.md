---
title: Table.PositionOf
---

# Table.PositionOf


Retourne la position ou les positions de la ligne dans la table.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Renvoie la position de la ligne de la première occurrence de l'élément `row` dans le `table` spécifié. Renvoie -1 si aucune occurrence n'est trouvée.

-   `table` : Le tableau d'entrée.
-   `row` : La ligne du tableau dont il faut déterminer la position.
-   `occurrence` : *(Facultatif)* Spécifie quelles occurrences de la ligne retourner.
-   `equationCriteria` : *(Facultatif)* Contrôle la comparaison entre les lignes du tableau.


## Examples

### Example #1
Recherche la position de la première occurrence de \[a = 2, b = 4\] dans la table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Recherche la position de la deuxième occurrence de \[a = 2, b = 4\] dans la table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Recherche la position de toutes les occurrences de \[a = 2, b = 4\] dans la table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
