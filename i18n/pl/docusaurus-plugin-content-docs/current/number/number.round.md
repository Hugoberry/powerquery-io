---
title: Number.Round
---

# Number.Round


Zwraca zaokrągloną liczbę. Można określić liczbę cyfr i tryb zaokrąglania.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Zwraca wynik zaokrąglenia `number` do najbliższej liczby. Jeśli `number` ma wartość null, funkcja `Number.Round` zwraca wartość null.  
  
Domyślnie wartość `number` jest zaokrąglana do najbliższej liczby całkowitej, a powiązania są przerywane przez zaokrąglenie do najbliższej liczby parzystej (przy użyciu funkcji `RoundingMode.ToEven`, zwanego także „zaokrągleniem bankowym”.  
  
Te ustawienia domyślne można jednak zastąpić następującymi parametrami opcjonalnymi.

-   `digits`: powoduje zaokrąglanie wartości `number` do określonej liczby dziesiętnej.
-   `roundingMode`: zastępuje domyślne zachowanie przerwania połączenia, gdy wartość `number` znajduje się w punkcie środkowym między dwiema potencjalnie zaokrąglonymi wartościami (zobacz funkcję `RoundingMode.Type` pod kątem możliwych wartości).


## Examples

### Example #1
Zaokrąglij liczbę 1,234 do najbliższej liczby całkowitej.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokrąglij liczbę 1,56 do najbliższej liczby całkowitej.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Zaokrąglij liczbę 1,2345 do dwóch miejsc dziesiętnych.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Zaokrąglij liczbę 1,2345 w górę do trzech miejsc dziesiętnych.
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Zaokrąglij liczbę 1,2345 w dół do trzech miejsc dziesiętnych.
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
