---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Geeft aan of deze datetime plaatsvindt in de huidige minuut volgens de huidige datum en tijd van het systeem.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Geeft aan of de opgegeven datetime-waarde `dateTime` plaatsvindt in de huidige minuut volgens de huidige datum en tijd van het systeem.

-   `dateTime`: Een `datetime`\- of `datetimezone`\-waarde die moet worden geëvalueerd.


## Examples

### Example #1
Bepalen of de huidige systeemtijd plaatsvindt in de huidige minuut.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
