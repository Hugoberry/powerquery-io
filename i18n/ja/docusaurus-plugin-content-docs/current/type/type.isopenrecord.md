---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


レコード型が OPEN かどうかを返します。


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

レコード `type` が OPEN かどうかを示す `logical` を返します。


## Examples

### Example #1
レコード `type [ A = number, ...]` が開かれているかどうかを判断します。
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
