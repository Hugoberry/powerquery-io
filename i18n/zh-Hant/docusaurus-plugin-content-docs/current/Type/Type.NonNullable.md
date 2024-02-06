---
title: Type.NonNullable
---

# Type.NonNullable


從類型傳回非可為 Null 類型。


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

從 <code>type</code> 傳回非 <code>nullable</code> 類型。


## Examples

### Example #1 
傳回 &lt;code&gt;type nullable number&lt;/code&gt; 的可為 Null 類型。
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
