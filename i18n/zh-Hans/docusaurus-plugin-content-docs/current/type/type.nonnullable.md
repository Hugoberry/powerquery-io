---
title: Type.NonNullable
---

# Type.NonNullable


从一个类型返回非空类型。


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

从 `type` 返回非 `nullable` 类型。


## Examples

### Example #1
返回 `type nullable number` 的非可空类型。
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
