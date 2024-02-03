---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Označuje, ali je kateri od navedenih zapisov prikazan kot vrstica v tabeli.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Označuje, ali je kateri od navedenih zapisov na seznamu zapisov <code>rows</code> prikazan kot vrstica v <code>table</code>.    Določite lahko izbirni parameter <code>equationCriteria</code> za nadzor primerjave med vrsticami tabele.


## Examples

### Example #1 
Ugotovite, ali tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; vsebuje vrstico &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; ali &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Ugotovite, ali tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; vsebuje vrstico &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ali &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Ugotovite, ali tabela &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; vsebuje vrstico &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ali &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, s primerjavo le stolpca [a].
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
