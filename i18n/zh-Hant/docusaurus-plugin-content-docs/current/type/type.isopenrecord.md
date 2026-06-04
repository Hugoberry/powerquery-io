---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


傳回記錄類型是否開啟。


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

傳回 `logical` 表示記錄 `type` 是否開啟。


## Examples

### Example #1
判斷記錄 `type [ A = number, ...]` 是否開啟。
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
