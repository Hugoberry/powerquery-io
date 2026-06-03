---
title: Type.Is
---

# Type.Is


Określa, czy wartość pierwszego typu jest zawsze zgodna z drugim typem.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Określa, czy wartość `type1` jest zawsze zgodna z `type2`. Parametr `type2` powinien być wartością typu pierwotnego (lub pierwotną wartością null). W przeciwnym razie zachowanie tej funkcji jest niezdefiniowane i nie należy na nich polegać.


## Examples

### Example #1
Określ, czy wartość typu number może być zawsze traktowana jako typ any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Określ, czy wartość typu any może być zawsze traktowana jako liczba typu.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
