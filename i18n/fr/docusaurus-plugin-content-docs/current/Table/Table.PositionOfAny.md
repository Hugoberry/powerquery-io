---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Retourne la position ou les positions d&#39;une ligne spécifiée dans la table.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Retourne les positions des lignes à partir du <code>table</code> de la première occurrence de la liste de <code>rows</code>. Retourne -1 si aucune occurrence n'est trouvée.    <ul>    <li><code>table</code> : table d'entrée.</li>       <li><code>rows</code> : liste des lignes dans la table dont il faut trouver les positions.</li>       <li><code>occurrence</code> : <i>[Facultatif]</i> spécifie quelles occurrences de la ligne sont à retourner.</li>       <li><code>equationCriteria</code> : <i>[Facultatif]</i> contrôle la comparaison entre les lignes de la table.</li>    </ul>    


## Examples

### Example #1 
Recherche la position de la première occurrence de [a = 2, b = 4] ou [a = 6, b = 8] dans la table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Recherche la position de toutes les occurrences de [a = 2, b = 4] ou [a = 6, b = 8] dans la table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
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
