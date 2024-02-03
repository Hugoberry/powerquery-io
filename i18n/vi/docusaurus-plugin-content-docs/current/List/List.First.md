---
title: List.First
---

# List.First


## Description

Trả về giá trị đầu tiên của danh sách hoặc giá trị mặc định được chỉ định nếu trống.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Trả về mục đầu tiên trong danh sách <code>list</code> hoặc giá trị mặc định tùy chọn <code>defaultValue</code> nếu danh sách này trống.    Nếu danh sách trống và một giá trị mặc định không được chỉ định thì hàm trả về <code>null</code>.


## Examples

### Example #1 
Tìm giá trị đầu tiên trong danh sách \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Tìm giá trị đầu tiên trong danh sách \{}. Nếu danh sách trống, trả về -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
