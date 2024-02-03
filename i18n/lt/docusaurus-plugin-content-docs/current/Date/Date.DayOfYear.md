---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Pateikiamas skaičius nuo 1 iki 366, reiškiantis metų dieną.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Pateikiamas skaičius, rodantis metų dieną pateiktoje <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmėje, <code>dateTime</code>.


## Examples

### Example #1 
2011 m. kovo 1 d. metų diena.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
