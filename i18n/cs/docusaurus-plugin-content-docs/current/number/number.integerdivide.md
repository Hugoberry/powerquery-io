---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Provede dělení dvou čísel a vrátí celočíselnou část výsledku.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Vrátí celočíselnou část výsledku dělení čísla `number1` číslem `number2`. Pokud je hodnota `number1` nebo `number2` null, funkce `Number.IntegerDivide` vrátí hodnotu null.

-   `number1`: Dělenec
-   `number2`: Dělitel


## Examples

### Example #1
Vydělí číslo 6 číslem 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Vydělí číslo 8,3 číslem 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
