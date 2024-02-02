---
title: Table.PositionOf
---

# Table.PositionOf


## Description

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


## Details

Retourne la position de ligne de la première occurrence de <code>row</code> dans le <code>table</code> spécifié. Retourne -1 si aucune occurrence n'est trouvée.    <ul>       <li><code>table</code> : table d'entrée.</li>       <li><code>row</code> : ligne dans la table dont il faut trouver la position.</li>       <li><code>occurrence</code> : <i>[Facultatif]</i> spécifie quelles occurrences de la ligne sont à retourner.</li>       <li><code>equationCriteria</code> : <i>[Facultatif]</i> contrôle la comparaison entre les lignes de la table.</li>    </ul>    


## Examples

### Example #1 
Recherche la position de la première occurrence de [a = 2, b = 4] dans la table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Recherche la position de la deuxième occurrence de [a = 2, b = 4] dans la table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Recherche la position de toutes les occurrences de [a = 2, b = 4] dans la table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
