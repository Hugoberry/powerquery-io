---
title: Type.NonNullable
---

# Type.NonNullable


Retorna o tipo não anulável de um tipo.


## Syntax

```powerquery
Type.NonNullable(
    type as type
) as type
```


## Remarks

Retorna o tipo não <code>nulo</code> de <code>type</code>.


## Examples

### Example #1 
Retorne o tipo não anulável de &lt;code&gt;número nulo de tipo&lt;/code&gt;.
```powerquery
Type.NonNullable(type nullable number)
```

Result: 
```powerquery
type number
```




## Category
Type
