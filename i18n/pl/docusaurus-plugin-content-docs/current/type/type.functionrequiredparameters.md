---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Zwraca liczbę określającą minimalną liczbę parametrów wymaganych do wywołania typu funkcji.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Zwraca liczbę określającą minimalną liczbę parametrów wymaganych do wywołania wejścia `type` funkcji.


## Examples

### Example #1
Znajdź liczbę wymaganych parametrów funkcji `(x as number, optional y as text)`.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
