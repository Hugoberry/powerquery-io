---
title: Type.NonNullable
---

# Type.NonNullable


Restituisce il tipo non nullable da un tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Restituisce il tipo non <code>nullable</code> da <code>type</code>.


## Examples

### Example #1 
Restituire il tipo non nullable di &lt;code&gt;type nullable number&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
