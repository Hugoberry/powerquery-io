---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Dzieli dwie liczby i zwraca część całkowitą wyniku.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Zwraca część całkowitą wyniku dzielenia liczby <code>number1</code> przez liczbę <code>number2</code>.    Jeśli liczba <code>number1</code> lub <code>number2</code> jest równa null, funkcja <code>Number.IntegerDivide</code> zwraca wartość null.      <ul>        <li><code>number1</code>: Dzielna.</li>        <li><code>number2</code>: Dzielnik.</li>      </ul>


## Examples

### Example #1 
Podziel 6 przez 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Podziel 8,3 przez 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
