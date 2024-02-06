---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Trả về (các) vị trí của bất kỳ hàng nào được chỉ định trong bảng.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Trả về (các) vị trí hàng từ <code>table</code> của lần xuất hiện đầu tiên của danh sách <code>rows</code>. Trả về -1 nếu không tìm thấy lần xuất hiện nào.    <ul>    <li><code>table</code>: Bảng đầu vào.</li>       <li><code>rows</code>:  Danh sách các hàng trong bảng sẽ tìm vị trí.</li>       <li><code>occurrence</code>: <i>[Tùy chọn]</i> Chỉ định trả về lần xuất hiện nào của hàng.</li>       <li><code>equationCriteria</code>: <i>[Tùy chọn]</i> kiểm soát phép so sánh giữa các hàng của bảng.</li>    </ul>    


## Examples

### Example #1 
Tìm vị trí của lần xuất hiện đầu tiên của [a = 2, b = 4] or [a = 6, b = 8] trong bảng &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
Tìm vị trí của tất cả các lần xuất hiện của [a = 2, b = 4] or [a = 6, b = 8] trong bảng &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
