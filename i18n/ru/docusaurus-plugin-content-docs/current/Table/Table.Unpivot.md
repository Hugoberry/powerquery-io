---
title: Table.Unpivot
---

# Table.Unpivot


## Description

Преобразует набор столбцов в таблице в пары &#34;атрибут-значение&#34;.


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

Преобразует набор столбцов в таблице в пары "атрибут-значение" в сочетании с другими значениями в каждой строке.


## Examples

### Example #1 
Взять столбцы &#34;a&#34;, &#34;b&#34; и &#34;c&#34; в таблице &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; и преобразовать их в пары &#34;атрибут-значение&#34;.
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
