---
title: Type.IsNullable
---

# Type.IsNullable


NULL 許容型の場合は true、それ以外の場合は false を返します。


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

<code>nullable</code> 型の場合は <code>true</code> を、それ以外の場合は <code>false</code> を返します。


## Examples

### Example #1 
&lt;code&gt;number&lt;/code&gt; が NULL 許容型かどうかを判断します。
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
&lt;code&gt;type nullable number&lt;/code&gt; が NULL 許容型かどうかを判断します。
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
