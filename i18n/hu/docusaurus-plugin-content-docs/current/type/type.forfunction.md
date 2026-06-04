---
title: Type.ForFunction
---

# Type.ForFunction


Egy olyan típust ad vissza, amely a paraméterekre és a visszatérési típusra vonatkozó adott megkötéseket tartalmazó függvényeket jelöl.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Egy `function type` típusú rekord létrehozása a(z) `signature` paraméterben megadott rekordból, amely egy visszatérési értéket megadó `ReturnType`, egy paramétereket megadó `Parameters`, illetve a kötelező argumentumok számát megadó `min` attribútumból áll.


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
