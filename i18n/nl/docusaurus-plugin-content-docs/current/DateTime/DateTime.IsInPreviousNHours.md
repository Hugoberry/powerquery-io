---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


## Description

Hiermee wordt aangegeven of deze datetime plaatsvindt gedurende de voorgaande uren volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige uur valt.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

Hiermee wordt aangegeven of de opgegeven datetime-waarde <code>dateTime</code> plaatsvindt gedurende de voorgaande uren volgens de huidige datum en tijd op het systeem. Houd er rekening mee dat deze functie onwaar retourneert als een waarde wordt doorgegeven die in het huidige uur valt.      <ul>      <li><code>dateTime</code>: Een <code>datetime</code>- of <code>datetimezone</code>-waarde die moet worden geëvalueerd.</li>      <li><code>hours</code>: Het aantal uur.</li>      </ul>


## Examples

### Example #1 
Bepalen of het uur vóór de huidige systeemtijd plaatsvindt in de vorige twee uren.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
