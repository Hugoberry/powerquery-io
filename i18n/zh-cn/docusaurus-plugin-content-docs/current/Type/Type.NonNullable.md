---
title: Type.NonNullable
---

# Type.NonNullable


## Description

从一个类型返回非空类型。


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Details

从 <code>type</code> 返回非 <code>nullable</code> 类型。


## Examples

### Example #1 
返回 &lt;code&gt;type nullable number&lt;/code&gt; 的非可空类型。
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
