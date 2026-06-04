---
title: Type.Is
---

# Type.Is


Meghatározza, hogy az első típus értéke mindig kompatibilis-e a második típussal.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Meghatározza, hogy a `type1` értéke mindig kompatibilis-e a `type2`. A(z) `type2` paraméternek primitív (vagy nullázható primitív) típusú értéknek kell lennie. Ellenkező esetben a függvény működése nincs definiálva, és nem szabad alapulnia.


## Examples

### Example #1
Annak meghatározása, hogy egy szám típusú érték mindig kezelhető-e bármely típusként.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Annak meghatározása, hogy egy tetszőleges típusú érték mindig kezelhető-e szám típusként.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
