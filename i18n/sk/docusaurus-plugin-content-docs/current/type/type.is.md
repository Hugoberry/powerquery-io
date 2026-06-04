---
title: Type.Is
---

# Type.Is


Určuje, či je hodnota prvého typu vždy kompatibilná s druhým typom.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Určuje, či je hodnota `type1` vždy kompatibilná s `type2`. `type2` parametra by mala byť jednoduchým typom typu (alebo hodnotou s povolenou hodnotou null). V opačnom prípade je správanie tejto funkcie nedefinované a nemalo by byť zapnuté.


## Examples

### Example #1
Určte, či sa hodnota typu number môže vždy považovať za typ any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Určte, či sa hodnota typu any môže vždy považovať za typ number.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
