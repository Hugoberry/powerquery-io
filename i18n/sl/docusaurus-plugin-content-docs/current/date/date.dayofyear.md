---
title: Date.DayOfYear
---

# Date.DayOfYear


Vrne število od 1 do 366, ki predstavlja dan v letu.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Vrne število, ki predstavlja dan letu v podani vrednosti `date`, `datetime` ali `datetimezone`, `dateTime`.


## Examples

### Example #1
Dan v letu za 1. marec 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
