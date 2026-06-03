---
title: Type.OpenRecord
---

# Type.OpenRecord


Trả về phiên bản mở của loại bản ghi cho sẵn (hoặc cùng loại nếu đã mở).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Remarks

Trả về phiên bản mở của `bản ghi` `type` cho sẵn (hoặc cùng loại nếu đã mở).


## Examples

### Example #1
Tạo phiên bản mở của `loại [ A = number]`.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
