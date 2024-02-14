---
title: Number.Mod
---

# Number.Mod


Dzieli dwie liczby i zwraca resztę z dzielenia.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Zwraca resztę z dzielenia liczby <code>number</code> przez liczbę <code>divisor</code>.    Jeśli liczba <code>number</code> lub <code>divisor</code> jest równa null, funkcja <code>Number.Mod</code> zwraca wartość null.      <ul>        <li><code>number</code>: Dzielna.</li>        <li><code>divisor</code>: Dzielnik.</li>      </ul>


## Examples

### Example #1 
Znajdź resztę z dzielenia 5 przez 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
