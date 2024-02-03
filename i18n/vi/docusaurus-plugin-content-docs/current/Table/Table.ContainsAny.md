---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Cho biết có bản ghi được chỉ định nào xuất hiện ở dạng hàng trong bảng hay không.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Cho biết có bản ghi được chỉ định nào trong danh sách bản ghi <code>rows</code> xuất hiện ở dạng hàng trong <code>table</code> hay không.    Có thể chỉ định tham số tùy chọn <code>equationCriteria</code> để kiểm soát phép so sánh giữa các hàng của bảng.


## Examples

### Example #1 
Xác định bảng &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; chứa hay không chứa các hàng &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; hoặc &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
Xác định bảng &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; chứa hay không chứa các hàng &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; hoặc &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
Xác định bảng &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; chứa hay không chứa các hàng &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; hoặc &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; khi chỉ so sánh cột [a].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
