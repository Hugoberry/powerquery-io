---
title: Number.IsOdd
---

# Number.IsOdd


Wskazuje, czy wartość jest nieparzysta.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Wskazuje, czy wartość jest nieparzysta. Zwraca wartość <code>true</code>, jeśli wartość <code>number</code> jest liczbą nieparzystą; w przeciwnym razie zwraca wartość <code>false</code>.


## Examples

### Example #1 
Sprawdź, czy liczba 625 jest liczbą nieparzystą.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy liczba 82 jest liczbą nieparzystą.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
