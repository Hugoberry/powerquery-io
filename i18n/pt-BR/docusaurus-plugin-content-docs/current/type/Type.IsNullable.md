---
title: Type.IsNullable
---

# Type.IsNullable


Retorna true se um tipo for um tipo anulável; caso contrário, false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Retorna <code>true</code> se um tipo for um tipo <code>nulo</code>; caso contrário, <code>false</code>.


## Examples

### Example #1 
Determine se &lt;code&gt;número&lt;/code&gt; é anulável.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2 
Determine se &lt;code&gt;número nulo de tipo&lt;/code&gt; é anulável.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
