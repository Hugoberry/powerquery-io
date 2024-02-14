---
title: Table.Unpivot
---

# Table.Unpivot


Omvandlar en uppsättning kolumner i en tabell till attribut-värde-par.


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

Omvandlar en uppsättning kolumner i en tabell till attribut-värde-par, som kombineras med resten av värdena på varje rad.


## Examples

### Example #1 
Använd kolumnerna &#34;a&#34;, &#34;b&#34; och &#34;c&#34; i tabellen &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; och inaktivera pivoteringen av kolumnerna till attribut-värde-par.
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
