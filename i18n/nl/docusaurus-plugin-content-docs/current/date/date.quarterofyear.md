---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Retourneert een getal dat aangeeft in welk kwartaal van het jaar de datum valt.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Retourneert een getal van 1 tot 4 dat aangeeft in welk kwartaal van het jaar de datum `dateTime` valt. `dateTime` kan een waarde voor `date`, `datetime` of `datetimezone` zijn.


## Examples

### Example #1
Zoeken in welk kwartaal van het jaar de datum #date(2011, 12, 31) valt.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
