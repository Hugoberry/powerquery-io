---
title: Type.ClosedRecord
---

# Type.ClosedRecord


返回给定记录类型(或同一类型，如果其已关闭)的已关闭版本。


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

返回给定 `record` `type` (或同一类型，如果其已关闭)的已关闭版本。


## Examples

### Example #1
创建 `type [ A = number,…]` 的已关闭版本。
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
