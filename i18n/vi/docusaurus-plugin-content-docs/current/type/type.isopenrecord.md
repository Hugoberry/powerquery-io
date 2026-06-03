---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Trả về loại bản ghi là đang mở.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Trả về giá trị `logic` cho biết bản ghi `type` đang mở.


## Examples

### Example #1
Xác định xem bản ghi `type [ A = number, ...]` có đang mở hay không.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
