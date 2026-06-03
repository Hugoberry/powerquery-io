---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


Loại bỏ đầu vào của siêu dữ liệu.


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

Loại bỏ đầu vào của siêu dữ liệu.


## Examples

### Example #1
Xóa tất cả siêu dữ liệu khỏi một giá trị văn bản.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2])
)
```

Result: 
```powerquery
[]
```


### Example #2
Chỉ xóa một trường siêu dữ liệu khỏi giá trị văn bản.
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2], {"a"})
)
```

Result: 
```powerquery
[b = 2]
```




## Category
Metadata
