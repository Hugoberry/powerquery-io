---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

Hiermee wordt aangegeven of deze datetime plaatsvindt gedurende in het voorgaande uur volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige uur valt.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende het voorgaande uur volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige uur valt.      <ul>      <li><code>dateTime</code>: Een <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      </ul>


## Examples

### Example #1 
Bepalen of het uur vóór de huidige systeemtijd plaatsvindt in het vorige uur.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
