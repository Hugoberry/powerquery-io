---
title: List.Range
---

# List.Range


## Description

Trả về tập hợp con của danh sách bắt đầu tại phần bù.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Details

Trả về tập hợp con của danh sách bắt đầu tại phần bù <code>list</code>. Một tham số tùy chọn là <code>offset</code> đặt số lượng mục tối đa trong tập hợp con.


## Examples

### Example #1 
Tìm tập hợp con bắt đầu tại phần bù 6 của danh sách số từ 1 tới 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Tìm tập hợp con có độ dài là 2 từ phần bù 6, từ danh sách số từ 1 tới 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
