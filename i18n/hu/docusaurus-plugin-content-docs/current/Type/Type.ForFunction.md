---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Egy olyan típust ad vissza, amely a paraméterekre és a visszatérési típusra vonatkozó adott megkötéseket tartalmazó függvényeket jelöl.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Egy <code>function type</code> típusú rekord létrehozása a(z) <code>signature</code> paraméterben megadott rekordból, amely egy visszatérési értéket megadó <code>ReturnType</code>, egy paramétereket megadó <code>Parameters</code>, illetve a kötelező argumentumok számát megadó <code>min</code> attribútumból áll.


## Examples

### Example #1 
Létrehozza egy függvény típusát, amely egy X nevű számparamétert fogad bemenetként, és egy számot ad vissza.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
