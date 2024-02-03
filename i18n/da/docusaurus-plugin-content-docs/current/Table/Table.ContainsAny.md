---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Angiver, om nogen af de angivne poster vises som rækker i tabellen.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Angiver, om nogen af de angivne poster på listen over poster <code>rows</code> vises som rækker i tabellen <code>table</code>.    Der kan angives en valgfri parameter <code>equationCriteria</code> for at styre sammenligningen mellem rækkerne i tabellen.


## Examples

### Example #1 
Find ud af, om tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; indeholder rækkerne &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; eller &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Find ud af, om tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; indeholder rækkerne &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; eller &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Find ud af, om tabellen &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; indeholder rækkerne &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; eller &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, og sammenlign kun kolonne [a].
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
