---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Geeft aan of deze datum plaatsvindt tijdens het huidige jaar en op of vóór de huidige dag valt, zoals wordt bepaald door de huidige datum en tijd op het systeem.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Geeft aan of de opgegeven datum-/tijdwaarde `dateTime` plaatsvindt tijdens het huidige jaar en op of vóór de huidige dag valt, zoals wordt bepaald door de huidige datum en tijd op het systeem.

-   `dateTime`: een waarde voor `date`, `datetime` of `datetimezone` die u wilt evalueren.


## Examples

### Example #1
Vaststellen of de huidige systeemtijd binnen het jaar tot vandaag valt.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
