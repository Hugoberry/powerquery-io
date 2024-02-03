---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Indică dacă oricare dintre înregistrările specificate apar ca rânduri în tabel.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Indică dacă oricare dintre înregistrările specificate în lista de înregistrări <code>rows</code> apar ca rânduri în <code>table</code>.    Un parametru opţional <code>equationCriteria</code> poate fi specificat pentru a controla comparaţia dintre rândurile tabelului.


## Examples

### Example #1 
Determinaţi dacă tabelul &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; conţine rândurile &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; sau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determinaţi dacă tabelul &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; conţine rândurile &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; sau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determinaţi dacă tabelul &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; conţine rândurile &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; sau &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; comparând doar coloana [a].
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
