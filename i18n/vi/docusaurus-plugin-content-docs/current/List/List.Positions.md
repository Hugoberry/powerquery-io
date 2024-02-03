---
title: List.Positions
---

# List.Positions


## Description

Trả về một danh sách phần bù cho đầu vào.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Trả về một danh sách phần bù cho danh sách đầu vào <code>list</code>.    Khi sử dụng List.Transform để thay đổi một danh sách thì danh sách vị trí có thể dùng để cấp quyền truy cập chuyển đổi đối với vị trí.


## Examples

### Example #1 
Tìm phần bù của giá trị trong danh sách \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
