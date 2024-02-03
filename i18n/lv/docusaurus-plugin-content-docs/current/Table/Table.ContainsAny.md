---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Tiek norādīts, vai tabulā ir ietverta kādam no norādītajiem ierakstiem atbilstoša rinda.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Tiek norādīts, vai tabulā <code>table</code> ir ietverta kādam no sarakstā <code>rows</code> norādītajiem ierakstiem atbilstoša rinda.    Varat norādīt papildu parametru <code>equationCriteria</code>, lai kontrolētu tabulas rindu salīdzinājumu.


## Examples

### Example #1 
Nosakiet, vai tabulā &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; ir ietverta rinda &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; vai &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Nosakiet, vai tabulā &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; ir ietverta rinda &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; vai &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Nosakiet, vai tabulā &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; ir ietverta rinda &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; vai &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, salīdzinot tikai kolonnu [a].
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
