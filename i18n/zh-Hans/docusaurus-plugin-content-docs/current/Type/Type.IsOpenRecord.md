---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


返回记录类型是否打开。


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

返回 <code>logical</code> 表明记录 <code>type</code> 是否打开。


## Examples

### Example #1 
决定记录 &lt;code&gt;type [ A = number, ...]&lt;/code&gt; 是否打开。
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
