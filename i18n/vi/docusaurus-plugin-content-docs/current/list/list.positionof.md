---
title: List.PositionOf
---

# List.PositionOf


Trả về (các) phần bù của một giá trị trong một danh sách.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Trả về phần bù tại đó giá trị <code>value</code> xuất hiện trong danh sách <code>list</code>. Trả về -1 nếu giá trị không xuất hiện.    Có thể chỉ định tham số lần xuất hiện tùy chọn <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Số lần xuất hiện tối đa để báo cáo.</li></ul>


## Examples

### Example #1 
Tìm vị trí trong danh sách \{1, 2, 3} mà tại đó giá trị 3 xuất hiện.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
