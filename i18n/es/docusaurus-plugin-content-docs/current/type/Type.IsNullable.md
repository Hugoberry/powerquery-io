---
title: Type.IsNullable
---

# Type.IsNullable


Devuelve true si un tipo es de un tipo que acepta valores NULL; de lo contrario, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Devuelve <code>true</code> si un tipo es de tipo <code>nullable</code>; de lo contrario, <code>false</code>.


## Examples

### Example #1 
Determinar si &lt;code&gt;number&lt;/code&gt; acepta valores NULL.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Determinar si &lt;code&gt;type nullable number&lt;/code&gt; acepta valores NULL.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
