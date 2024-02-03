---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

Trả về phiên bản đã đóng của loại bản ghi cho sẵn (hoặc cùng loại nếu đã đóng).


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

Trả về phiên bản đã đóng của <code>bản ghi</code> <code>type</code> cho sẵn (hoặc cùng loại nếu đã đóng).


## Examples

### Example #1 
Tạo phiên bản đã đóng của &lt;code&gt;loại [ A = number,…]&lt;/code&gt;.
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
