---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


傳回記錄類型是否開啟。


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

傳回 <code>logical</code> 表示記錄 <code>type</code> 是否開啟。


## Examples

### Example #1 
判斷記錄 &lt;code&gt;type [ A = number, ...]&lt;/code&gt; 是否開啟。
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
