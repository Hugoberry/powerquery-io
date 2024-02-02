---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Indique si l&#39;un des enregistrements spécifiés s&#39;affiche sous la forme de lignes dans la table.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Indique si l'un des enregistrements spécifiés dans la liste d'enregistrements <code>rows</code> s'affiche sous la forme de lignes dans <code>table</code>.    Un paramètre facultatif <code>equationCriteria</code> peut être spécifié pour contrôler la comparaison entre les lignes de la table.


## Examples

### Example #1 
Détermine si la table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contient les lignes &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si la table &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contient les lignes &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
Détermine si la table &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; contient les lignes &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; en comparant seulement la colonne [a].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
