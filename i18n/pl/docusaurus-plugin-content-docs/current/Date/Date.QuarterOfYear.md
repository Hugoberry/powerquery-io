---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Zwraca liczbę wskazującą, w którym kwartale roku wypada dana data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Zwraca liczbę z zakresu od 1 do 4 wskazującą, w którym kwartale roku wypada data <code>dateTime</code>. Data <code>dateTime</code> może być wartością typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.


## Examples

### Example #1 
Ustal, w którym kwartale roku wypada data #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
