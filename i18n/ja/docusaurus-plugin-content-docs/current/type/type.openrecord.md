---
title: Type.OpenRecord
---

# Type.OpenRecord


指定されたレコード型の開かれたバージョンを返します (既に開かれている場合は同じ型)。


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

指定された `record` の開かれたバージョン `type` を返します (既に開かれている場合は同じ型)。


## Examples

### Example #1
開かれたバージョンの `type [ A = number]` を作成します。
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
