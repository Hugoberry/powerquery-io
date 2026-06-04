---
title: Number.From
---

# Number.From


Vytvorí číslo z danej hodnoty.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vráti hodnotu `number` zo zadanej hodnoty `value`. Voliteľne sa tiež môže zadať `culture` (napríklad en-US). Ak zadaná hodnota `value` je `null`, `Number.From` vráti hodnotu `null`. Ak zadaná hodnota `value` je `number`, vráti sa hodnota `value`. Hodnoty nasledujúcich typov možno konvertovať na hodnotu `number`:

-   `text`: Hodnota `number` z textového vyjadrenia. Spracujú sa bežné formáty textu ("15", "3,423.10", "5.0E-10"). Podrobnosti nájdete v časti `Number.FromText`.
-   `logical`: 1 pre hodnotu `true`, 0 pre hodnotu `false`.
-   `datetime`: Číslo s pohyblivou desatinnou čiarkou s dvojitou presnosťou, ktoré obsahuje ekvivalent dátumu automatizácie OLE.
-   `datetimezone`: Číslo s pohyblivou desatinnou čiarkou s dvojitou presnosťou, ktoré obsahuje ekvivalent dátumu automatizácie OLE miestneho dátumu a času `value`.
-   `date`: Číslo s pohyblivou desatinnou čiarkou s dvojitou presnosťou, ktoré obsahuje ekvivalent dátumu automatizácie OLE.
-   `time`: Vyjadrené v zlomkových dňoch.
-   `duration`: Vyjadrené v celých a v zlomkových dňoch.

Ak je hodnota `value` akéhokoľvek iného typu, vráti sa chyba.


## Examples

### Example #1
Získajte hodnotu `number` čísla `"4"`.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Získajte hodnotu `number` čísla `#datetime(2020, 3, 20, 6, 0, 0)`.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Získajte hodnotu `number` z čísla `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
