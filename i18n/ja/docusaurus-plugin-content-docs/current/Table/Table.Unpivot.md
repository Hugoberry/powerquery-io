---
title: Table.Unpivot
---

# Table.Unpivot


## Description

テーブル内の一連の列を属性/値のペアに変換します。


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

テーブルの一連の列を属性/値のペアに変換します。その際、各行の残りの値と結合します。


## Examples

### Example #1 
テーブル &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; の列 &#34;a&#34;、&#34;b&#34;、および &#34;c&#34; を受け取り、属性/値のペアにピボット解除します。
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
