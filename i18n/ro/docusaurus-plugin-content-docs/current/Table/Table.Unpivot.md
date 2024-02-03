---
title: Table.Unpivot
---

# Table.Unpivot


## Description

Traduce un set de coloane dintr-un tabel în perechi atribut-valoare.


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

Traduce un set de coloane dintr-un tabel în perechi atribut-valoare, combinate cu restul valorilor din fiecare rând.


## Examples

### Example #1 
Preia coloanele „a”, „b” şi „c” din tabelul &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; şi anulaţi pivotarea acestora în perechi atribut-valoare.
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
