---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Zwraca wynik zaokrąglenia liczby dodatniej w dół lub liczby ujemnej w górę. Można określić liczbę miejsc po przecinku.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Zwraca wynik zaokrąglenia liczby <code>number</code> w zależności od jej znaku. Ta funkcja zaokrągla liczby dodatnie w dół, a liczby ujemne w górę.    Jeśli parametr <code>digits</code> jest określony, liczba <code>number</code> jest zaokrąglana do liczby miejsc po przecinku określonej przez parametr <code>digits</code>.  


## Examples

### Example #1 
Zaokrąglij liczbę -1,2 w kierunku zera.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Zaokrąglij liczbę 1,2 w kierunku zera.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Zaokrąglij liczbę -1,234 do dwóch miejsc po przecinku w kierunku do zera.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
