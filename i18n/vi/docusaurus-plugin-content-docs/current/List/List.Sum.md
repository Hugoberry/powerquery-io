---
title: List.Sum
---

# List.Sum


## Description

Trả về tổng cộng các mục trong danh sách.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Trả về tổng của các giá trị không rỗng trong danh sách <code>list</code>.  Trả về giá trị rỗng nếu không có giá trị nào trong danh sách là giá trị không rỗng.


## Examples

### Example #1 
Tìm tổng của các số trong danh sách &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
