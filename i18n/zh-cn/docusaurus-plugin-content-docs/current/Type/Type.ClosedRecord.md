---
title: Type.ClosedRecord
---

# Type.ClosedRecord


## Description

返回给定记录类型(或同一类型，如果其已关闭)的已关闭版本。


## Syntax

```powerquery
Type.ClosedRecord(
    type as type
) as type
```


## Details

返回给定 <code>record</code> <code>type</code> (或同一类型，如果其已关闭)的已关闭版本。


## Examples

### Example #1 
创建 &lt;code&gt;type [ A = number,…]&lt;/code&gt; 的已关闭版本。
```powerquery
Type.ClosedRecord(type [A = number, ...])
```

Result: 
```powerquery
type [A = number]
```




## Category
Type
