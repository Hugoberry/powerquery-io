---
title: Type.ClosedRecord
---

# Type.ClosedRecord


傳回指定記錄類型的封閉版本 (如果己經是封閉版本則需為相同類型)。


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

傳回指定 `record` `type` 的封閉版本 (如果己經是封閉版本則需為相同類型)。


## Examples

### Example #1
建立 `type [ A = number,...]` 的封閉版本。
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
