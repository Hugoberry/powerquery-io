---
title: Type.Is
---

# Type.Is


Bestimmt, ob ein Wert des ersten Typs immer mit dem zweiten Typ kompatibel ist.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Bestimmt, ob ein Wert <code>type1</code> immer mit <code>type2</code> kompatibel ist.


## Examples

### Example #1 
Bestimmen Sie, ob ein Wert vom Typ „number“ immer auch als Typ „any“ behandelt werden kann.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Bestimmen Sie, ob ein Wert vom Typ „any“ immer auch als Typ „number“ behandelt werden kann.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
