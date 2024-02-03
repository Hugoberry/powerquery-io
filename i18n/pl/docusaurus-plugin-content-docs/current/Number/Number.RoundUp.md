---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Zwraca następną największą liczbę. Można określić liczbę miejsc po przecinku.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Zwraca wynik zaokrąglenia liczby <code>number</code> w górę do następnej najwyższej liczby całkowitej. Jeśli parametr <code>number</code> ma wartość null, to funkcja zwróci wartość null. Jeśli parametr <code>digits</code> jest określony, liczba <code>number</code> jest zaokrąglana do określonej liczby miejsc po przecinku.


## Examples

### Example #1 
Zaokrąglij w górę do liczby całkowitej wartość 1,234.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Zaokrąglij w górę do liczby całkowitej wartość 1,999.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Zaokrąglij w górę liczbę 1,234 do dwóch miejsc po przecinku.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
