---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Nurodoma, ar kurie nors nurodyti įrašai lentelėje rodomi kaip eilutė.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Nurodoma, ar kurie nors nurodyti įrašai įrašų sąraše <code>rows</code> rodomi kaip eilutės <code>table</code>.    Galima nurodyti pasirenkamą parametrą <code>equationCriteria</code>, norint valdyti lentelės eilučių palyginimą.


## Examples

### Example #1 
Nustatykite, ar lentelėje &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; yra eilutės &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; arba &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Nustatykite, ar lentelėje &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; yra eilutės &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; arba &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Nustatykite, ar lentelėje &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; yra eilutės &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; arba &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, lygindami tik stulpelį [a].
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
