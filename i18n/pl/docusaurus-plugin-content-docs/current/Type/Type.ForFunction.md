---
title: Type.ForFunction
---

# Type.ForFunction


## Description

Zwraca typ reprezentujący funkcje z określonymi ograniczeniami dotyczącymi parametrów i zwracanych typów.


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

Tworzy element <code>function type</code> na podstawie elementu <code>signature</code>, rekord typu <code>ReturnType</code>, element <code>Parameters</code> i wartość <code>min</code> będącą minimalną liczbą argumentów wymaganych do wywołania funkcji.


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
