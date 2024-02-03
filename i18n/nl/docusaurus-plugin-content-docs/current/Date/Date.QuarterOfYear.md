---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Retourneert een getal dat aangeeft in welk kwartaal van het jaar de datum valt.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Retourneert een getal van 1 tot 4 dat aangeeft in welk kwartaal van het jaar de datum <code>dateTime</code> valt. <code>dateTime</code> kan een waarde voor <code>date</code>, <code>datetime</code> of <code>datetimezone</code> zijn.


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
