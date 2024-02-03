---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Značí, zda se mají zadané záznamy zobrazovat jako řádky tabulky.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Značí, zda se mají zadané záznamy v seznamu záznamů <code>rows</code> zobrazovat jako řádky tabulky <code>table</code>.    Za účelem řízení porovnání mezi řádky tabulky může být určen volitelný parametr <code>equationCriteria</code>.


## Examples

### Example #1 
Určí, zda tabulka &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; obsahuje řádky &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; nebo &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Určí, zda tabulka &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; obsahuje řádky &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; nebo &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Určí, zda tabulka &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; obsahuje řádky &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; nebo &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; porovnáním pouze se sloupcem [a].
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
