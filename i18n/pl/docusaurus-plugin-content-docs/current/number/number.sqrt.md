---
title: Number.Sqrt
---

# Number.Sqrt


Zwraca pierwiastek kwadratowy liczby.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Zwraca pierwiastek kwadratowy liczby `number`. Jeśli parametr `number` ma wartość null, funkcja `Number.Sqrt` zwraca wartość null. Jeśli ma wartość ujemną, jest zwracana wartość typu `Number.NaN` (nieliczbowa).


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
