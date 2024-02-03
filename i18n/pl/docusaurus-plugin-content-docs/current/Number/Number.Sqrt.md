---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Zwraca pierwiastek kwadratowy liczby.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Zwraca pierwiastek kwadratowy liczby <code>number</code>.    Jeśli parametr <code>number</code> ma wartość null, funkcja <code>Number.Sqrt</code> zwraca wartość null. Jeśli ma wartość ujemną, jest zwracana wartość typu <code>Number.NaN</code> (nieliczbowa).


## Examples

### Example #1 
Znajdź pierwiastek kwadratowy liczby 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Znajdź pierwiastek kwadratowy liczby 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
