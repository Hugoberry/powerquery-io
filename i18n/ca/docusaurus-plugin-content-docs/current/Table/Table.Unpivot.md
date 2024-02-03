---
title: Table.Unpivot
---

# Table.Unpivot


## Description

Tradueix un conjunt de columnes d&#39;una taula en parells atribut-valor.


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

Tradueix un conjunt de columnes d'una taula en parells atribut-valor, combinats amb la resta dels valors de cada fila.


## Examples

### Example #1 
Pren les columnes &#34;a&#34;, &#34;b&#34; i &#34;c&#34; de la taula &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; i els aplica l&#39;operador UNPIVOT perquè formin parells atribut-valor.
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
