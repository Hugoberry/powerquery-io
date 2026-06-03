---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Geeft aan of deze datum plaatsvindt tijdens de huidige maand, zoals wordt bepaald door de huidige datum en tijd op het systeem.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Geeft aan of de opgegeven datum-/tijdwaarde `dateTime` plaatsvindt tijdens de huidige maand, zoals wordt bepaald door de huidige datum en tijd op het systeem.

-   `dateTime`: een waarde voor `date`, `datetime` of `datetimezone` die u wilt evalueren.


## Examples

### Example #1
Vaststellen of de huidige systeemtijd binnen de huidige maand valt.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
