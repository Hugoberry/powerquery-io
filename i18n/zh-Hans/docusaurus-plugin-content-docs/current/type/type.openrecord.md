---
title: Type.OpenRecord
---

# Type.OpenRecord


返回给定记录类型(或同一类型，如果其已打开)的打开版本。


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

返回给定 `record` `type` (或同一类型，如果其已打开)的打开版本。


## Examples

### Example #1
创建 `type [ A = number]` 的打开版本。
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
