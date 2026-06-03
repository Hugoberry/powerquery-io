---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Retourne la position ou les positions d'une ligne spécifiée dans la table.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Retourne les positions des lignes à partir du `table` de la première occurrence de la liste de `rows`. Renvoie -1 si aucune occurrence n'est trouvée.

-   `table` : Le tableau d'entrée.
-   `rows` : La liste des lignes de la table dont il faut déterminer les positions.
-   `occurrence` : *(Facultatif)* Spécifie quelles occurrences de la ligne retourner.
-   `equationCriteria` : *(Facultatif)* Contrôle la comparaison entre les lignes du tableau.


## Examples

### Example #1
Recherche la position de la première occurrence de \[a = 2, b = 4\] ou \[a = 6, b = 8\] dans la table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Recherche la position de toutes les occurrences de \[a = 2, b = 4\] ou \[a = 6, b = 8\] dans la table `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
