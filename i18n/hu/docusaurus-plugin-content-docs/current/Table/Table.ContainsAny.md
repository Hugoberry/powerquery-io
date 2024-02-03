---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Azt jelzi, hogy valamely megadott rekord sorként szerepel-e a táblában.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Azt jelzi, hogy a(z) <code>rows</code> rekordlistában valamely megadott rekord sorként szerepel-e a(z) <code>table</code> táblában.    A választható <code>equationCriteria</code> paraméterrel határozható meg a tábla sorainak összehasonlítása.


## Examples

### Example #1 
Annak megállapítása, hogy az &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; tábla tartalmazza-e a következő sorokat: &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; vagy &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;
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
Annak megállapítása, hogy az &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; tábla tartalmazza-e a következő sorokat: &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; vagy &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Annak megállapítása, hogy a &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; tábla tartalmazza-e a következő sorokat: &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; vagy &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; csak az [a] oszlop összehasonlításával.
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
