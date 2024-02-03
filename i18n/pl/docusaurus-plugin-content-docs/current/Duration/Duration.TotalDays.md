---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Zwraca łączną liczbę dni, które obejmuje ten czas trwania.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Zwraca łączną liczbę dni obejmującą <code>duration</code>.


## Examples

### Example #1 
Znajdź łączną liczbę dni o wartości czasu trwania.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
