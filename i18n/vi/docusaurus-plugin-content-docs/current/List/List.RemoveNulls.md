---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Loại bỏ tất cả giá trị &#34;rỗng&#34; khỏi danh sách được chỉ định.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Loại bỏ tất cả những lần xuất hiện của giá trị "rỗng" trong <code>list</code>. Nếu không có giá trị 'rỗng' nào trong danh sách thì danh sách gốc được trả về.


## Examples

### Example #1 
Loại bỏ giá trị &#34;rỗng&#34; khỏi danh sách \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
