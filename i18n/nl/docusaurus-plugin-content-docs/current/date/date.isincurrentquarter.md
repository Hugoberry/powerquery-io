---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Geeft aan of deze datum plaatsvindt tijdens het huidige kwartaal, zoals wordt bepaald door de huidige datum en tijd op het systeem.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Geeft aan of de opgegeven datum-/tijdwaarde `dateTime` plaatsvindt tijdens het huidige kwartaal, zoals wordt bepaald door de huidige datum en tijd op het systeem.

-   `dateTime`: een waarde voor `date`, `datetime` of `datetimezone` die u wilt evalueren.


## Examples

### Example #1
Vaststellen of de huidige systeemtijd binnen het huidige kwartaal valt.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
