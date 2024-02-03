---
title: Type.Is
---

# Type.Is


## Description

Meghatározza, hogy az első típus értéke mindig kompatibilis-e a második típussal.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Meghatározza, hogy a(z) <code>type1</code> értéke mindig kompatibilis-e a következővel: <code>type2</code>.


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
