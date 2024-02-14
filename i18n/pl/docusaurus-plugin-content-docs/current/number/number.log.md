---
title: Number.Log
---

# Number.Log


Zwraca logarytm o określonej podstawie (domyślnie jest to liczba e) z danej liczby.


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Zwraca logarytm o określonej podstawie <code>base</code> z liczby <code>number</code>. Jeśli parametr <code>base</code> nie zostanie określony, będzie używana wartość domyślna Number.E.    Jeśli parametr <code>number</code> ma wartość null, funkcja <code>Number.Log</code> zwraca wartość null.


## Examples

### Example #1 
Oblicz logarytm dziesiętny z 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Oblicz logarytm naturalny z 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
