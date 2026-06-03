---
title: List.Last
---

# List.Last


Trả về giá trị cuối cùng của danh sách hoặc giá trị mặc định được chỉ định nếu trống.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Trả về mục cuối cùng trong danh sách đã chỉ định hoặc giá trị mặc định tùy chọn nếu danh sách này trống.

-   `list`: Danh sách cần kiểm tra.
-   `defaultValue`: (Tùy chọn) Giá trị mặc định để trả về nếu danh sách trống. Nếu danh sách trống và không có giá trị mặc định được chỉ định, hàm sẽ trả về `null`.


## Examples

### Example #1
Tìm giá trị cuối cùng trong danh sách \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Tìm giá trị cuối cùng trong danh sách \{\} hoặc -1 nếu trống.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
