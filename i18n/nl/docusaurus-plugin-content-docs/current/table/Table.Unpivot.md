---
title: Table.Unpivot
---

# Table.Unpivot


Zet een set kolommen in een tabel om in paren kenmerk-waarde.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Remarks

Zet een set kolommen in een tabel om in paren kenmerk-waarde, gecombineerd met de rest van de waarden in elke rij.


## Examples

### Example #1 
De kolommen &#34;a&#34;, &#34;b&#34; en &#34;c&#34; in de tabel &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; nemen en het draaien ervan naar paren kenmerk-waarde ongedaan maken.
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
