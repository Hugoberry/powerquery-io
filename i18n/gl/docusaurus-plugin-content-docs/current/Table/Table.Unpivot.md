---
title: Table.Unpivot
---

# Table.Unpivot


## Description

Traduce un conxunto de columnas nunha táboa en pares atributo-valor.


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

Traduce un conxunto de columnas da táboa en pares de atributo-valor, xunto co resto dos valores de cada fila.


## Examples

### Example #1 
Tomar as columnas &#34;a&#34;, &#34;b&#34; e &#34;c&#34; da táboa &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; e anular a dinamización delas en pares atributo-valor.
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
