---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Geeft aan of deze datum plaatsvindt tijdens de huidige week, zoals wordt bepaald door de huidige datum en tijd op het systeem.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Geeft aan of de opgegeven datum-/tijdwaarde `dateTime` plaatsvindt tijdens de huidige week, zoals wordt bepaald door de huidige datum en tijd op het systeem.

-   `dateTime`: een waarde voor `date`, `datetime` of `datetimezone` die u wilt evalueren.


## Examples

### Example #1
Vaststellen of de huidige systeemtijd binnen de huidige week valt.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
