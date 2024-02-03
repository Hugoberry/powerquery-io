---
title: Table.Unpivot
---

# Table.Unpivot


## Description

Menterjemahkan set lajur dalam jadual ke dalam pasangan nilai atribut.


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

Menterjemahkan set lajur dalam jadual ke dalam pasangan nilai atribut, digabungkan dengan baki nilai dalam setiap baris.


## Examples

### Example #1 
Ambil lajur &#34;a&#34;, &#34;b&#34; dan &#34;c&#34; dalam jadual &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; dan nyahpangsinya ke dalam pasangan nilai atribut.
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
