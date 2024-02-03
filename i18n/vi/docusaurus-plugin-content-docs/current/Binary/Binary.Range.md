---
title: Binary.Range
---

# Binary.Range


## Description

Trả về tập hợp con của giá trị nhị phân bắt đầu tại phần bù.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Trả về tập hợp con của giá trị nhị phân bắt đầu tại phần bù <code>binary</code>. Tham số tùy chọn <code>offset</code> quy định độ dài tối đa của tập hợp con.


## Examples

### Example #1 
Trả về tập hợp con của giá trị nhị phân bắt đầu tại phần bù 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Trả về tập hợp con có độ dài 2 từ phần bù 6 của giá trị nhị phân.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
