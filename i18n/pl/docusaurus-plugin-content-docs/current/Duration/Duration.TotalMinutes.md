---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Zwraca łączną liczbę minut, które obejmuje ten czas trwania.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Zwraca łączną liczbę minut obejmującą <code>duration</code>.


## Examples

### Example #1 
Znajdź łączną liczbę minut o wartości czasu trwania.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
