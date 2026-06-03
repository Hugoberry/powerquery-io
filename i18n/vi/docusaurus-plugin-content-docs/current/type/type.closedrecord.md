---
title: Type.ClosedRecord
---

# Type.ClosedRecord


Trả về phiên bản đã đóng của loại bản ghi cho sẵn (hoặc cùng loại nếu đã đóng).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Remarks

Trả về phiên bản đã đóng của `bản ghi` `type` cho sẵn (hoặc cùng loại nếu đã đóng).


## Examples

### Example #1
Tạo phiên bản đã đóng của `type [ A = number,...]`.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
