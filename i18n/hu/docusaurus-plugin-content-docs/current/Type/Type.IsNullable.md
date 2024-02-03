---
title: Type.IsNullable
---

# Type.IsNullable


## Description

Nullértéket támogató típus esetén true, nullmentes típus esetén pedig false érték visszaadása.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Details

A <code>nullable</code> jellegű típusok esetén <code>true</code>, nullmentes típusok esetén pedig <code>false</code> érték visszaadása.


## Examples

### Example #1 
A &lt;code&gt;number&lt;/code&gt; típus nullérték-támogatottságának meghatározása.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
A &lt;code&gt;type nullable number&lt;/code&gt; típus nullérték-támogatottságának meghatározása.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
