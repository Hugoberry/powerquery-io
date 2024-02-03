---
title: Table.Unpivot
---

# Table.Unpivot


## Description

Lentelės stulpelių rinkinys verčiamas į atributų reikšmių poras.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Details

Lentelės stulpelių rinkinys verčiamas į atributų reikšmių poras kartu su likusiomis reikšmėmis kiekvienoje eilutėje.


## Examples

### Example #1 
Paimkite stulpelius „a“, „b“ ir „c“ iš lentelės &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; ir surikiuokite juos į atributų reikšmių poras.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
