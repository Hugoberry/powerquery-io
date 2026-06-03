---
title: Number.Exp
---

# Number.Exp


Podnosi liczbę „e” do danej potęgi.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

Zwraca wyniki podniesienia liczby „e” do potęgi `number` (funkcja wykładnicza).

-   `number`: Wartość typu `number`, dla której ma zostać obliczona funkcja wykładnicza. Jeśli parametr `number` ma wartość null, funkcja `Number.Exp` zwraca wartość null.


## Examples

### Example #1
Podnieś liczbę „e” do potęgi 3.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
