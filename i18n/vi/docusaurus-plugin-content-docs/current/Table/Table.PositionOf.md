---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Trả về (các) vị trí của hàng trong bảng.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Trả về vị trí hàng của lần xuất hiện đầu tiên của <code>row</code> trong <code>table</code> được chỉ định. Trả về -1 nếu không tìm thấy lần xuất hiện nào.    <ul>       <li><code>table</code>: Bảng đầu vào.</li>       <li><code>row</code>: Hàng trong bảng sẽ tìm vị trí.</li>       <li><code>occurrence</code>: <i>[Tùy chọn]</i> Chỉ định trả về lần xuất hiện nào của hàng.</li>       <li><code>equationCriteria</code>: <i>[Tùy chọn]</i> kiểm soát phép so sánh giữa các hàng của bảng.</li>    </ul>    


## Examples

### Example #1 
Tìm vị trí của lần xuất hiện đầu tiên của [a = 2, b = 4] trong bảng &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
Tìm vị trí của lần xuất hiện thứ hai của [a = 2, b = 4] trong bảng &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
Tìm vị trí của tất cả các lần xuất hiện của [a = 2, b = 4] trong bảng &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
