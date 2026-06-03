---
title: Type.NonNullable
---

# Type.NonNullable


Trả về loại không phải giá trị null từ một loại.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Trả về loại không phải `giá trị null` từ `type`.


## Examples

### Example #1
Trả về loại không phải giá trị null của `loại số không phải giá trị null`.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
