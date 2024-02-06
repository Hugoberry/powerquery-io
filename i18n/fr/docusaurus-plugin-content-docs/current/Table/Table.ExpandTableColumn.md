---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Développe une colonne d&#39;enregistrements ou une colonne de tables en plusieurs colonnes dans la table conteneur.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Développe les tables dans <code>table</code>[<code>column</code>] en plusieurs lignes et colonnes. <code>columnNames</code> est utilisé pour sélectionner les colonnes à développer à partir d'une table interne. Spécifie <code>newColumnNames</code> pour éviter les conflits entre des colonnes existantes et de nouvelles colonnes.


## Examples

### Example #1 
Développe les colonnes de la table dans &lt;code&gt;[a]&lt;/code&gt; dans la table &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; en 3 colonnes &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; et &lt;code&gt;[t.c]&lt;/code&gt;.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
