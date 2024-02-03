---
title: DateTime.IsInNextSecond
---

# DateTime.IsInNextSecond


## Description

Hiermee wordt aangegeven of deze datetime plaatsvindt gedurende de volgende seconde volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige seconde valt.


## Syntax

```powerquery
DateTime.IsInNextSecond(
    dateTime as any
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende de volgende seconde volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in de huidige seconde valt.      <ul>      <li><code>dateTime</code>: Een <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      </ul>


## Examples

### Example #1 
Bepalen of de seconde na de huidige systeemtijd plaatsvindt in de volgende seconde.
```powerquery
DateTime.IsInNextSecond(DateTime.FixedLocalNow() + #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
