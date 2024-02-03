---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Geeft aan of deze datum plaatsvindt tijdens de huidige maand, zoals wordt bepaald door de huidige datum en tijd op het systeem.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Geeft aan of de opgegeven datum-/tijdwaarde <code>dateTime</code> plaatsvindt tijdens de huidige maand, zoals wordt bepaald door de huidige datum en tijd op het systeem.      <ul>      <li><code>dateTime</code>: een waarde voor <code>date</code>, <code>datetime</code> of <code>datetimezone</code> die u wilt evalueren.</li>      </ul>


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
