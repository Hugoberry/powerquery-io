---
title: Table.Pivot
---

# Table.Pivot


## Description

Cho một cặp cột biểu thị cặp thuộc tính-giá trị, hãy xoay dữ liệu trong cột thuộc tính thành tiêu đề cột.


## Syntax

```powerquery
Table.Pivot(
    table as table,
    pivotValues as list,
    attributeColumn as text,
    valueColumn as text,
    optional aggregationFunction as function
) as table
```


## Details

Cho một cặp cột biểu thị cặp thuộc tính-giá trị, hãy xoay dữ liệu trong cột thuộc tính thành tiêu đề cột.


## Examples

### Example #1 
Lấy giá trị &#34;a&#34;, &#34;b&#34; và &#34;c&#34; trong cột thuộc tính của bảng &lt;code&gt;(\{ [ key = &#34;x&#34;, attribute = &#34;a&#34;, value = 1 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 3 ], [ key = &#34;y&#34;, attribute = &#34;a&#34;, value = 2 ], [ key = &#34;y&#34;, attribute = &#34;b&#34;, value = 4 ] })&lt;/code&gt; và xoay các giá trị này thành cột riêng của chúng.
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 3],
    [key = "y", a = 2, b = 4, c = null]
})
```


### Example #2 
Lấy giá trị &#34;a&#34;, &#34;b&#34; và &#34;c&#34; trong cột thuộc tính của bảng &lt;code&gt;(\{ [ key = &#34;x&#34;, attribute = &#34;a&#34;, value = 1 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 3 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 5 ], [ key = &#34;y&#34;, attribute = &#34;a&#34;, value = 2 ], [ key = &#34;y&#34;, attribute = &#34;b&#34;, value = 4 ] })&lt;/code&gt; và xoay các giá trị này thành cột riêng của chúng.  Thuộc tính &#34;c&#34; cho khóa &#34;x&#34; có nhiều giá trị liên kết đi kèm nên hãy sử dụng hàm List.Max để giải quyết xung đột.
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "x", attribute = "c", value = 5],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value",
    List.Max
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 5],
    [key = "y", a = 2, b = 4, c = null]
})
```




## Category
Table.Column operations
