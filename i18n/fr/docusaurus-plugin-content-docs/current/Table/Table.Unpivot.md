---
title: Table.Unpivot
---

# Table.Unpivot


## Description

Traduit un ensemble de colonnes dans une table en paires attribut-valeur.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Details

Traduit un ensemble de colonnes dans une table en paires attribut-valeur, associées au reste des valeurs dans chaque ligne.


## Examples

### Example #1 
Prend les colonnes &#34; a &#34;, &#34; b &#34; et &#34; c &#34; dans la table &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; et annule le basculement en paires d&#39;attribut-valeur.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
