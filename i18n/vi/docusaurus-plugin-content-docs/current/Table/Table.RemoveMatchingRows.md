---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Loại bỏ tất cả những lần xuất hiện của các hàng được chỉ định khỏi bảng.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Loại bỏ tất cả những lần xuất hiện của <code>rows</code> được chỉ định khỏi <code>table</code>.    Có thể chỉ định tham số tùy chọn <code>equationCriteria</code> để kiểm soát phép so sánh giữa các hàng của bảng.


## Examples

### Example #1 
Loại bỏ mọi hàng có [a = 1] khỏi bảng &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
