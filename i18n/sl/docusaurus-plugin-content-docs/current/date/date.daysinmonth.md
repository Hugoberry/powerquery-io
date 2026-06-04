---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Vrne število od 28 do 31, ki kaže število dni v mesecu.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Vrne število dni v mesecu v vrednosti `date`, `datetime` ali `datetimezone`, `dateTime`.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, za katero je vrnjeno število dni v mesecu.


## Examples

### Example #1
Število dni v mesecu decembru, kot ga predstavlja `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
