---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Dzieli dwie liczby i zwraca część całkowitą wyniku.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Zwraca część całkowitą wyniku dzielenia liczby `number1` przez liczbę `number2`. Jeśli liczba `number1` lub `number2` jest równa null, funkcja `Number.IntegerDivide` zwraca wartość null.

-   `number1`: Dzielna.
-   `number2`: Dzielnik.


## Examples

### Example #1
Podziel 6 przez 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Podziel 8,3 przez 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
