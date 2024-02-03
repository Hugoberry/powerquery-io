---
title: Type.IsNullable
---

# Type.IsNullable


## Description

如果类型是可空类型则返回 True；否则，返回 False。


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

如果类型是 <code>nullable</code> 类型则返回 <code>true</code>；否则，返回 <code>false</code>。


## Examples

### Example #1 
确定 &lt;code&gt;number&lt;/code&gt; 是否可空。
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
确定 &lt;code&gt;type nullable number&lt;/code&gt; 是否可空。
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
