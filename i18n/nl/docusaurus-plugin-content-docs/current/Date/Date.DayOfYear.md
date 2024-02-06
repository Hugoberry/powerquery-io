---
title: Date.DayOfYear
---

# Date.DayOfYear


Retourneert een getal tussen 1 en 366 dat de dag van het jaar vertegenwoordigt.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Retourneert een getal dat de dag van het jaar vertegenwoordigt in de opgegeven waarde voor <code>date</code>, <code>datetime</code> of <code>datetimezone</code>, <code>dateTime</code>.


## Examples

### Example #1 
De dag van het jaar voor 1 maart 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
