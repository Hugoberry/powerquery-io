---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Trả về loại bản ghi là đang mở.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Trả về giá trị <code>logic</code> cho biết bản ghi <code>type</code> đang mở.


## Examples

### Example #1 
Xác định xem bản ghi &lt;code&gt;type [ A = number, ...]&lt;/code&gt; có đang mở hay không.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
