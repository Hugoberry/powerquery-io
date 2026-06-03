---
title: Type.ListItem
---

# Type.ListItem


ส่งกลับประเภทรายการจากประเภทรายการ


## Syntax

```powerquery
Type.ListItem(
    type as type
) as type
```


## Remarks

ส่งกลับประเภทรายการจากรายการ `type`.


## Examples

### Example #1
ค้นหาประเภทรายการจากรายการ `{number}`
```powerquery
Type.ListItem(type {number})
```

Result: 
```powerquery
type number
```




## Category
Type
