---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

Zwraca łączną liczbę sekund, które obejmuje ten czas trwania.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

Zwraca łączną liczbę sekund obejmującą <code>duration</code>.


## Examples

### Example #1 
Znajdź łączną liczbę sekund o wartości czasu trwania.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
