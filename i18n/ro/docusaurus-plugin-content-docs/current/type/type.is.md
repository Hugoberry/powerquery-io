---
title: Type.Is
---

# Type.Is


Determină dacă o valoare de primul tip este întotdeauna compatibilă cu al doilea tip.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Determină dacă o valoare a `type1` este întotdeauna compatibilă cu `type2`. Parametrul `type2` trebuie să fie o valoare primitivă (sau primitivă null). În caz contrar, comportamentul acestei funcții este nedefinit și nu ar trebui să se bazeze pe el.


## Examples

### Example #1
Determinați dacă o valoare a numărului de tip poate fi tratată întotdeauna ca oricare tip.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Determinați dacă o valoare de tip oricare poate fi tratată întotdeauna și ca număr de tip.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
