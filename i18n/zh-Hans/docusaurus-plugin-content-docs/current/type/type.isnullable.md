---
title: Type.IsNullable
---

# Type.IsNullable


如果类型是可空类型则返回 True；否则，返回 False。


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

如果类型是 `nullable` 类型则返回 `true`；否则，返回 `false`。


## Examples

### Example #1
确定 `number` 是否可空。
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
确定 `type nullable number` 是否可空。
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
