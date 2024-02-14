---
title: Time.StartOfHour
---

# Time.StartOfHour


Retourneert het begin van het uur.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Retourneert het begin van het uur vertegenwoordigd door <code>dateTime</code>. <code>dateTime</code> moet een <code>tijdstip</code>-, <code>datum/tijd</code>- of <code>datum/tijdzone</code>-waarde zijn.


## Examples

### Example #1 
Het begin van het uur zoeken voor 10 oktober, 2011, 8:10:32 uur.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
