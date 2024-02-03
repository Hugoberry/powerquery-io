---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Wskazuje, czy wartość jest wartością typu NaN (nieliczbową).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Wskazuje, czy wartość jest wartością typu NaN (nieliczbową). Zwraca wartość <code>true</code>, jeśli wartość <code>number</code> jest odpowiednikiem wartości typu <code>Number.IsNaN</code>; w przeciwnym razie zwraca wartość <code>false</code>.


## Examples

### Example #1 
Sprawdź, czy wynik dzielenia 0 przez 0 jest wartością typu NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy wynik dzielenia 1 przez 0 jest wartością typu NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
