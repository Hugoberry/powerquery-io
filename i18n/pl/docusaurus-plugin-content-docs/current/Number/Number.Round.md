---
title: Number.Round
---

# Number.Round


## Description

Zwraca zaokrągloną liczbę. Można określić liczbę cyfr i tryb zaokrąglania.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Zwraca wynik zaokrąglenia <code>number</code> do najbliższej liczby. Jeśli <code>number</code> ma wartość null, funkcja <code>Number.Round</code> zwraca wartość null.<br />      <br />      Domyślnie wartość <code>number</code> jest zaokrąglana do najbliższej liczby całkowitej, a powiązania są przerywane przez zaokrąglenie do najbliższej liczby parzystej (przy użyciu funkcji <code>RoundingMode.ToEven</code>, zwanego także „zaokrągleniem bankowym”.<br />      <br />      Te ustawienia domyślne można jednak zastąpić następującymi parametrami opcjonalnymi.       <ul>        <li><code>digits</code>: powoduje zaokrąglanie wartości <code>number</code> do określonej liczby dziesiętnej.</li>        <li><code>roundingMode</code>: zastępuje domyślne zachowanie przerwania połączenia, gdy wartość <code>number</code> znajduje się w punkcie środkowym między dwiema potencjalnie zaokrąglonymi wartościami      (zobacz funkcję <code>RoundingMode.Type</code> pod kątem możliwych wartości).</li>      </ul>


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
