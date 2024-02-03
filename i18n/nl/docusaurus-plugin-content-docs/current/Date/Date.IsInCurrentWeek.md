---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


## Description

Geeft aan of deze datum plaatsvindt tijdens de huidige week, zoals wordt bepaald door de huidige datum en tijd op het systeem.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Details

Geeft aan of de opgegeven datum-/tijdwaarde <code>dateTime</code> plaatsvindt tijdens de huidige week, zoals wordt bepaald door de huidige datum en tijd op het systeem.      <ul>      <li><code>dateTime</code>: een waarde voor <code>date</code>, <code>datetime</code> of <code>datetimezone</code> die u wilt evalueren.</li>      </ul>


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
