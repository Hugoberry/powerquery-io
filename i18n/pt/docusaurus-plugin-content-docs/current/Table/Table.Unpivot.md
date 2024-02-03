---
title: Table.Unpivot
---

# Table.Unpivot


## Description

Translates a set of columns in a table into attribute-value pairs.


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

Translates a set of columns in a table into attribute-value pairs, combined with the rest of the values in each row.


## Examples

### Example #1 
Take the columns &#34;a&#34;, &#34;b&#34;, and &#34;c&#34; in the table &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; and unpivot them into attribute-value pairs.
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
