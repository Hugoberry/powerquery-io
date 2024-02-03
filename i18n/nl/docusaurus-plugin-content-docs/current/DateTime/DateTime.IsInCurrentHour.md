---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Geeft aan of deze datetime plaatsvindt in het huidige uur volgens de huidige datum en tijd van het systeem.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Geeft aan of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt in het huidige uur volgens de huidige datum en tijd van het systeem.      <ul>      <li><code>dateTime</code>: Een <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      </ul>


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
