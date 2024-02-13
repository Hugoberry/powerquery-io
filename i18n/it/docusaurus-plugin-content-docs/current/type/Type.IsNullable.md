---
title: Type.IsNullable
---

# Type.IsNullable


Restituisce true se il tipo è un tipo nullable; in caso contrario, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Restituisce <code>true</code> se un tipo è <code>nullable</code>; in caso contrario, <code>false</code>.


## Examples

### Example #1 
Determinare se &lt;code&gt;number&lt;/code&gt; è nullable.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Determinare se &lt;code&gt;number&lt;/code&gt; è nullable.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
