---
title: Type.Is
---

# Type.Is


Anger om ett värde av den första typen alltid är kompatibelt med den andra typen.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Anger om ett värde för <code>type1</code> alltid är kompatibelt med <code>type2</code>.


## Examples

### Example #1 
Kontrollera om ett värde av typen nummer alltid kan behandlas som typen any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om ett värde av typen any alltid kan behandlas som typen nummer.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
