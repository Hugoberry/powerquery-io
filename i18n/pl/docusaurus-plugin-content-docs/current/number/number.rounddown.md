---
title: Number.RoundDown
---

# Number.RoundDown


Zwraca poprzednią największą liczbę. Można określić liczbę miejsc po przecinku.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Zwraca wynik zaokrąglenia liczby `number` w dół do poprzedniej największej liczby całkowitej. Jeśli parametr `number` ma wartość null, funkcja zwróci wartość null. Jeśli parametr `digits` jest określony, liczba `number` jest zaokrąglana do określonej liczby miejsc po przecinku.


## Examples

### Example #1
Zaokrąglij w dół do liczby całkowitej wartość 1,234.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokrąglij w dół do liczby całkowitej wartość 1,999.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Zaokrąglij w dół liczbę 1,999 do dwóch miejsc po przecinku.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
