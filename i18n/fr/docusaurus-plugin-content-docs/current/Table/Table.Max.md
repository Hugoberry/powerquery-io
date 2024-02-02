---
title: Table.Max
---

# Table.Max


## Description

Retourne la plus grande ligne ou la valeur par défaut à l&#39;aide des critères fournis.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Retourne la plus grande ligne dans <code>table</code> en fonction de <code>comparisonCriteria</code>. Si la table est vide, la valeur <code>default</code> facultative est retournée. 


## Examples

### Example #1 
Recherche la ligne avec la plus grande valeur dans la colonne [a] dans la table &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2 
Recherche la ligne avec la plus grande valeur dans la colonne [a] dans la table &lt;code&gt;(\{})&lt;/code&gt;. Retourne -1 si l&#39;objet est vide.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
