---
title: Number.Power
---

# Number.Power


Podnosi liczbę do danej potęgi.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Zwraca wyniki podniesienia liczby `number` do potęgi `power`. Jeśli liczba `number` lub `power` jest równa null, funkcja `Number.Power` zwraca wartość null.

-   `number`: Podstawa.
-   `power`: Wykładnik.


## Examples

### Example #1
Znajdź wynik podniesienia liczby 5 do potęgi 3 (5 do sześcianu).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
