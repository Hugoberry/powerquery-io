---
title: Table.ContainsAny
---

# Table.ContainsAny


Geeft aan of willekeurig welke van de opgegeven records als rijen in de tabel worden weergegeven.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Geeft aan of willekeurig welke van de opgegeven records in de lijst met records <code>rows</code> als rijen in de <code>table</code> worden weergegeven.    Er kan een optionele parameter <code>equationCriteria</code> worden opgegeven voor het aansturen van de vergelijking tussen de rijen van de tabel.


## Examples

### Example #1 
Bepalen of de tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; de rij &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; of &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; bevat.
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
Bepalen of de tabel &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; de rij &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; of &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; bevat.
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
Bepalen of de tabel &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; de rij &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; of &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; bevat, waarbij alleen de kolom [a] wordt vergeleken.
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
