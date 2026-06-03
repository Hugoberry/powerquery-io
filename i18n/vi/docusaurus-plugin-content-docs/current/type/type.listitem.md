---
title: Type.ListItem
---

# Type.ListItem


Trả về loại mục từ loại danh sách.


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

Trả về loại mục từ loại danh sách `type`.


## Examples

### Example #1
Tìm loại mục từ `{number}` danh sách.
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
