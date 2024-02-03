---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Trả về phần bù đầu tiên của một giá trị trong danh sách.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Trả về phần bù trong danh sách <code>list</code> của lần xuất hiện đầu tiên của một giá trị trong danh sách <code>values</code>. Trả về -1 nếu không tìm thấy lần xuất hiện nào.    Có thể chỉ định tham số lần xuất hiện tùy chọn <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Số lần xuất hiện tối đa có thể được trả về.</li></ul>


## Examples

### Example #1 
Tìm vị trí đầu tiên trong danh sách \{1, 2, 3} mà tại đó giá trị 2 hoặc 3 xuất hiện.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
