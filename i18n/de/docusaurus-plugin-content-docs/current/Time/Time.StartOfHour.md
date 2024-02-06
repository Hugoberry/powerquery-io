---
title: Time.StartOfHour
---

# Time.StartOfHour


Gibt den Anfang der Stunde zurück.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Gibt den Beginn der Stunde, der durch <code>dateTime</code> dargestellt wird, zurück.    <code>dateTime</code> muss ein <code>time</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert sein.


## Examples

### Example #1 
Suchen Sie den Anfang der Stunde für den 10. Oktober 2011, 8:10:32 Uhr.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
