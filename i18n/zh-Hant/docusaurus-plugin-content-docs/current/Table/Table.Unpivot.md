---
title: Table.Unpivot
---

# Table.Unpivot


將資料表中的一組資料行轉譯為屬性/值組。


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

將資料表中的一組資料行轉譯為屬性/值組，並結合每個資料列中其餘的值。


## Examples

### Example #1 
採用資料表 &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; 中的資料行 &#34;a&#34;、&#34;b&#34; 和 &#34;c&#34;，並將它們取消樞紐分析成屬性/值組。
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
