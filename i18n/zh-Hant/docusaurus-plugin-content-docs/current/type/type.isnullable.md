---
title: Type.IsNullable
---

# Type.IsNullable


若類型為可為 Null 類型時傳回 true；否則傳回 false。


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

若類型為 `nullable` 類型時傳回 `true`；否則為 `false`。


## Examples

### Example #1
判斷 `number` 是否可為 Null。
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
判斷是否 `type nullable number` 可為 Null。
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
