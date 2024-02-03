---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Udáva, či sa niektoré zo zadaných záznamov zobrazujú ako riadky v tabuľke.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Udáva, či sa niektoré zadané záznamy v zozname záznamov <code>rows</code> zobrazujú ako riadky v tabuľke <code>table</code>.    Možno stanoviť voliteľný parameter <code>equationCriteria</code> a kontrolovať tak porovnanie medzi riadkami tabuľky.


## Examples

### Example #1 
Určte, či tabuľka &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; obsahuje riadky &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; alebo &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Určte, či tabuľka &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; obsahuje riadky &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; alebo &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Určte, či tabuľka &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; obsahuje riadky &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; alebo &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, pričom porovnáva iba stĺpec [a].
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
