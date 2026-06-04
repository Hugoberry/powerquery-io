---
title: Type.NonNullable
---

# Type.NonNullable


從類型傳回非可為 Null 類型。


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

從 `type` 傳回非 `nullable` 類型。


## Examples

### Example #1
傳回 `type nullable number` 的可為 Null 類型。
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
