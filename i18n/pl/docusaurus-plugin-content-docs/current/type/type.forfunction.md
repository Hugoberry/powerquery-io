---
title: Type.ForFunction
---

# Type.ForFunction


Zwraca typ reprezentujący funkcje z określonymi ograniczeniami dotyczącymi parametrów i zwracanych typów.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

Tworzy element `function type` na podstawie elementu `signature`, rekord typu `ReturnType`, element `Parameters` i wartość `min` będącą minimalną liczbą argumentów wymaganych do wywołania funkcji.


## Examples

### Example #1
Tworzy typ dla funkcji, który przyjmuje parametr w postaci liczby o nazwie X i zwraca liczbę.
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
