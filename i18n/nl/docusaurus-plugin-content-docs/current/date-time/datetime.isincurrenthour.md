---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Geeft aan of deze datetime plaatsvindt in het huidige uur volgens de huidige datum en tijd van het systeem.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Geeft aan of de opgegeven datetime-waarde `dateTime` plaatsvindt in het huidige uur volgens de huidige datum en tijd van het systeem.

-   `dateTime`: Een `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.


## Examples

### Example #1
Bepalen of de huidige systeemtijd plaatsvindt in het huidige uur.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
