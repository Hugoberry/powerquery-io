---
title: Type.ClosedRecord
---

# Type.ClosedRecord


指定されたレコード型の閉じられたバージョンを返します (既に閉じられている場合は同じ型)。


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

指定された `record` の閉じられたバージョン `type` を返します (既に閉じられている場合は同じ種類)。


## Examples

### Example #1
閉じられたバージョンの `type [ A = number,...]` を作成します。
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
