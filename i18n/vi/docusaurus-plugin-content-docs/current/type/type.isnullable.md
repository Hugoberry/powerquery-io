---
title: Type.IsNullable
---

# Type.IsNullable


Trả về true nếu loại là loại có thể vô giá trị; nếu không sẽ là false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Trả về `true` nếu loại là loại `có thể vô giá trị`; nếu không sẽ là `false`.


## Examples

### Example #1
Xác định xem `số` có phải là số có thể vô giá trị hay không.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Xác định xem `loại số có thể vô giá trị` có phải là vô giá trị hay không.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
