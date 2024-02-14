---
title: Number.Sign
---

# Number.Sign


Zwraca wartość 1, gdy liczba jest dodatnia, -1, gdy jest ujemna, i 0, gdy jest równa 0.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Zwraca wartość 1, gdy liczba <code>number</code> jest dodatnia, -1, gdy jest ujemna, i 0, gdy jest równa 0.    Jeśli parametr <code>number</code> ma wartość null, funkcja <code>Number.Sign</code> zwraca wartość null.


## Examples

### Example #1 
Ustal znak liczby 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2 
Ustal znak liczby -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3 
Ustal znak liczby 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
