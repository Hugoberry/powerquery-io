---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Zwraca łączną liczbę godzin, które obejmuje ten czas trwania.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Zwraca łączną liczbę godzin obejmującą <code>duration</code>.


## Examples

### Example #1 
Znajdź łączną liczbę godzin o wartości czasu trwania.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
