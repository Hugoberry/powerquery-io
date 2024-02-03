---
title: Type.Is
---

# Type.Is


## Description

Determină dacă o valoare de primul tip este întotdeauna compatibilă cu al doilea tip.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Determină dacă o valoare de <code>type1</code> este întotdeauna compatibilă cu <code>type2</code>.


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
