---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Zwraca wynik zaokrąglenia liczby dodatniej w górę lub liczby ujemnej w dół. Można określić liczbę miejsc po przecinku.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Zwraca wynik zaokrąglenia liczby <code>number</code> w zależności od jej znaku. Ta funkcja zaokrągla liczby dodatnie w górę, a liczby ujemne w dół.    Jeśli parametr <code>digits</code> jest określony, liczba <code>number</code> jest zaokrąglana do liczby miejsc po przecinku określonej przez parametr <code>digits</code>.  


## Examples

### Example #1 
Zaokrąglij liczbę -1,2 w kierunku od zera.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Zaokrąglij liczbę 1,2 w kierunku od zera.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Zaokrąglij liczbę -1,234 do dwóch miejsc po przecinku w kierunku od zera.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
